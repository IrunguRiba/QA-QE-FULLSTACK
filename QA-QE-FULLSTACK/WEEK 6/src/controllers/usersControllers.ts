// Use UserRequest instead of Request.
// Ensure Admins manage users (using adminGuard in userRoutes.ts).
// Return only safe user details (excluding password).
// ✅ Ensures Admins can manage users (CRUD).
// ✅ Returns safe user details (excludes password).
// ✅ New users default to the Attendee role.
import { Request, Response } from "express";

import pool from "../db/db";
import asyncHandler from "../middleware/asyncHandler";

//Only admins should get all users
export const getUsers = asyncHandler(async(req:Request, res:Response) => {
    const result = await pool.query("SELECT user_id, name, email, role_id FROM users ORDER BY user_id ASC");
    res.status(200).json(result.rows);
})
export const deleteUsers = asyncHandler(async (req:Request, res:Response)=>{
    try {  
        const { id } = req.params;
        if(!id){
            res.status(500).json({
                message: "No user Id found"
            })
        }   
        const result = await pool.query("DELETE FROM users WHERE user_id = $1;", [id]); 
        if(result.rowCount == 0 ){
            res.status(500).json({
                message: "User Not Found😕😔"
            })
            return
        }
    
        res.status(200).json({ message: "User deleted successfully" });  
    } catch (error) {  
        res.status(500).json({ error: "Failed to delete user" }); 
    }  
})
