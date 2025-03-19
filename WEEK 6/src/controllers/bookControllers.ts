import { Request, Response } from "express";
import pool from "../db/db";
import { Book } from "../utils/types/bookTypes";

// Create a new book (Admin/Librarian only)
export const createBook = async (req: Request, res: Response) => {
    try {
        const { title, author, genre, year, publisher, description, price, total_copies, available_copies } = req.body as Book;

        const query = `
        INSERT INTO books (title, author, genre, year, publisher, description, price, total_copies, available_copies)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;
    `;
    const values = [title, author, genre, year, publisher, description, price, total_copies, available_copies || total_copies]; // ✅ Add available_copies
    

        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Failed to create book", details: error });
    }
};

// Get all books
export const getBooks = async (_req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM books;");
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
};

// Get a book by ID
export const getBookById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM books WHERE book_id = $1;", [id]);

        if (result.rows.length === 0) {
            res.status(404).json({ message: "Book not found" });
            return 
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving book" });
    }
};

// Update book details (Admin/Librarian only)
export const updateBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, author, genre, year, publisher, description, price, total_copies } = req.body as Partial<Book>;

        const query = `
            UPDATE books SET 
                title = COALESCE($1, title),
                author = COALESCE($2, author),
                genre = COALESCE($3, genre),
                year = COALESCE($4, year),
                publisher = COALESCE($5, publisher),
                description = COALESCE($6, description),
                price = COALESCE($7, price),
                total_copies = COALESCE($8, total_copies)
            WHERE book_id = $9 RETURNING *;
        `;
        const values = [title, author, genre, year, publisher, description, price, total_copies, id];

        const result = await pool.query(query, values);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Failed to update book" });
    }
};

// Delete a book (Admin only)
export const deleteBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if(!id){
            res.status(500).json({
                message: "No ID found"
            })
        }
        const result = await pool.query("DELETE FROM books WHERE book_id = $1;", [id]);
        if(result.rowCount  == 0 ){
            res.status(500).json({
                message: "Sorry ,Book not found!😔😒"
            })
        }

        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete book" });
    }
};
