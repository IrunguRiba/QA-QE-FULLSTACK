import { Request, Response, NextFunction } from "express";
import pool from "../db/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/helpers/generateToken";
import asyncHandler from "../middleware/asyncHandler";

// Register User
export const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password, role_id } = req.body;

    // Check if user exists
    const userExists = await pool.query("SELECT user_id FROM users WHERE email = $1", [email]);

    if (userExists.rows.length > 0) {
        res.status(400).json({ message: "User already exists" });
        return;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert into user table
    const newUser = await pool.query(
        `INSERT INTO users (name, email, password_hash, role_id) 
         VALUES ($1, $2, $3, $4) RETURNING user_id, name, email, role_id`,
        [name, email, hashedPassword, role_id]
    );

    // Generate JWT token
    generateToken(res, newUser.rows[0].user_id, newUser.rows[0].role_id);

    res.status(201).json({
        message: "User registered successfully",
        user: newUser.rows[0],
    });
});

// Login User

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const userQuery = await pool.query(
        `SELECT users.user_id, users.name, users.email, users.password_hash, users.role_id, user_role.role_name
         FROM users
         JOIN user_role ON users.role_id = user_role.role_id
         WHERE email = $1`,
        [email]
    );

    if (userQuery.rows.length === 0) {
        res.status(401).json({ message: "Invalid email or password" });
        return 
    }

    const user = userQuery.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
        res.status(401).json({ message: "Invalid email or password" });
        return 
    }

    await generateToken(res, user.user_id, user.role_id);

    res.status(200).json({
        message: "Login successful", // Still include token in response for debugging
        user: {
            user_id: user.user_id,
            name: user.name,
            email: user.email,
            role_id: user.role_id,
            role_name: user.role_name,
        },
    });
});



// Logout User
export const logoutUser = asyncHandler(async (_req: Request, res: Response) => {
    // Immediately invalidate the access and refresh tokens
    res.cookie("access_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        expires: new Date(0), // Expire immediately
    });

    res.cookie("refresh_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        expires: new Date(0), // Expire immediately
    });

    res.status(200).json({ message: "User logged out successfully" });
});
