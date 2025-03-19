import express from "express";
import { borrowBook, returnBook, getBorrowedBooks } from "../controllers/borrowersController";
import { protect } from "../middleware/auth/protect";
import { adminGuard, librarianGuard } from "../middleware/auth/roleMiddleWare";

const router = express.Router();

// Borrow a book
router.post("/borrow",protect  ,borrowBook);

// Return a book
router.post("/return",protect, returnBook);

// Get all borrowed books
router.get("/borrowed",protect,adminGuard, getBorrowedBooks);

export default router;
