import { Request, Response, NextFunction } from "express";
import pool from "@app/db/db";
import asyncHandler from "@app/middleware/asyncHandler";

export const trackBooks = asyncHandler(async (req: Request, res: Response) => {
    const { bookId, inventory_number, condition, status, location } = req.body;

    // Validate required fields
    if (!bookId || !inventory_number || !status || !location || !condition) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Step 1: Check if the bookId exists in the books table
    const bookCheck = await pool.query(
        `SELECT title FROM books WHERE book_id = $1`, 
        [bookId]
    );

    if (bookCheck.rowCount === 0) {
        res.status(404).json({ error: "Book ID not found. Cannot add copy." });
        return 
    }

    const bookTitle = bookCheck.rows[0].title;

    // Step 2: Insert into bookcopies table
    const result = await pool.query(
        `INSERT INTO bookcopies (book_id, inventory_number, condition, status, location) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [bookId, inventory_number, condition, status, location]
    );

    res.status(201).json({
        message: `Book copy added successfully for '${bookTitle}'`,
        data: result.rows[0],
    });
});
