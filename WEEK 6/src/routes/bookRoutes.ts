import express from "express";
import { protect } from "../middleware/auth/protect";
import { createBook, getBooks, getBookById, updateBook, deleteBook } from "../controllers/bookControllers";
import { adminGuard, librarianGuard, borrowerGuard } from '../middleware/auth/roleMiddleWare'


const router = express.Router();

router.post("/",protect, createBook); // Only Admins & Librarians can create books
router.get("/",protect, getBooks); // Public route
router.get("/:id", protect, getBookById); // Public route
router.put("/:id", protect, librarianGuard, updateBook); // Only Admins & Librarians can update
router.delete("/:id/admin", protect, adminGuard, deleteBook); // Only Admins can delete books

export default router;




