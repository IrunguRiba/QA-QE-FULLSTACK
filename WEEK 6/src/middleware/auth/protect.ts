import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import pool from "../../db/db";
import { UserRequest } from "../../utils/types/userTypes";
import asyncHandler from "../asyncHandler";

// Middleware to protect routes
export const protect = asyncHandler(async (req: UserRequest, res: Response, next: NextFunction) => {
    let token;

    // Get token from Authorization Header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    // Get token from cookies
    if (!token && req.cookies?.access_token) {
        token = req.cookies.access_token;
    }

    console.log("🔍 Token Received:", token); // Debugging

    // If no token found
    if (!token) {
        res.status(401).json({ message: "Not authorized, no token" }); // ✅ Add return to prevent multiple responses
        return
    }

    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: number; roleId: number };

        console.log("✅ Decoded User:", decoded.userId);

        const userQuery = await pool.query(
            "SELECT users.user_id, users.name, users.email, users.role_id, user_role.role_name FROM users JOIN user_role ON users.role_id = user_role.role_id WHERE users.user_id = $1",
            [decoded.userId]
        );

        if (userQuery.rows.length === 0) {
            res.status(401).json({ message: "User not found" }); // ✅ Add return to stop execution
            return
        }

        req.user = userQuery.rows[0];

        next();
    } catch (error) {
        console.error("❌ JWT Error:", error);
        res.status(401).json({ message: "Not authorized, token failed" }); // ✅ Add return to stop execution
        return 

    }
});
