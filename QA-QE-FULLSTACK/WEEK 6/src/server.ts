import { setupAliases } from "import-aliases";
setupAliases()
import authRoutes from "@app/routes/authroutes";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";


import cookieParser from "cookie-parser"; 
import userRoutes from "./routes/usersRoutes";
import bookRoutes from "./routes/bookRoutes";
import borrowerRoutes from "./routes/borrowersRoutes"; 




// Load environment variables first
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser()); 

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Routes
app.use("/api/v1/auth", authRoutes); 
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/borrowers", borrowerRoutes); 

// Test route
app.get("/", (req, res) => {
    res.send("Hello, Welcome to the Book Posting API!");
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Server is running on port: ${port}`);
});
