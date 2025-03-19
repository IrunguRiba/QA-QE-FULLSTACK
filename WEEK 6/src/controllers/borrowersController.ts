import { Request, Response, NextFunction } from "express";
import pool from "../db/db"; // Ensure this imports your database connection
import asyncHandler from "../middleware/asyncHandler"; // Import your async handler

// Borrow a book
export const borrowBook = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { userId, copyId, librarianId } = req.body;

    if (!userId || !copyId || !librarianId) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    await pool.query("BEGIN");

    // Check if the book copy is available
    const bookResult = await pool.query(
        `SELECT available_copies, book_id FROM books 
         WHERE book_id = (SELECT book_id FROM bookcopies WHERE copy_id = $1) 
         FOR UPDATE`,
        [copyId]
    );

    if (bookResult.rowCount === 0 || bookResult.rows[0].available_copies <= 0) {
        throw new Error("No available copies of this book.");
    }

    const bookId = bookResult.rows[0].book_id;

    // Insert into borrowers table
    await pool.query(
        `INSERT INTO borrowers (user_id, copy_id, librarian_id, borrow_date, status)
        VALUES ($1, $2, $3, NOW(), 'borrowed')`,
        [userId, copyId, librarianId]
    );

    // Update available copies
    await pool.query(
        `UPDATE books SET available_copies = available_copies - 1 
        WHERE book_id = $1`,
        [bookId]
    );

    await pool.query("COMMIT");

    res.status(200).json({ message: "Book borrowed successfully" });
});

// Return a book
export const returnBook = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { userId, copyId } = req.body;

    if (!userId || !copyId) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    await pool.query("BEGIN");

    // Check if the book is actually borrowed
    const borrowResult = await pool.query(
        `SELECT book_id FROM borrowers WHERE user_id = $1 AND copy_id = $2 AND status = 'borrowed' FOR UPDATE`,
        [userId, copyId]
    );

    if (borrowResult.rowCount === 0) {
        throw new Error("This book was not borrowed or has already been returned.");
    }

    const bookId = borrowResult.rows[0].book_id;

    // Mark as returned
    await pool.query(
        `UPDATE borrowers SET status = 'returned', return_date = NOW() 
        WHERE user_id = $1 AND copy_id = $2`,
        [userId, copyId]
    );

    // Increase available copies
    await pool.query(
        `UPDATE books SET available_copies = available_copies + 1 
        WHERE book_id = $1`,
        [bookId]
    );

    await pool.query("COMMIT");

    res.status(200).json({ message: "Book returned successfully" });
});

// Get all borrowed books
export const getBorrowedBooks = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const result = await pool.query(
        `SELECT borrowers.user_id, books.title, bookcopies.copy_id, borrowers.borrow_date, borrowers.status
        FROM borrowers
        JOIN bookcopies ON borrowers.copy_id = bookcopies.copy_id
        JOIN books ON bookcopies.book_id = books.book_id`
    );

    res.status(200).json(result.rows);
});
