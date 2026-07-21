import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRoutes from "./routes/chat.routes.js";

dotenv.config();

const app = express();

// app.use(cors());
app.use(cors({
    // origin: [
    //     "http://localhost:5173",
    //     "https://portfolio-kappa-three-e36msqmj1f.vercel.app",
    // ],
    origin: true,
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.use((req, res, next) => {
  console.log(req.method, req.originalUrl, req.headers.origin);
  next();
});

// Root route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "🚀 Srinivas AI Portfolio Backend is Running"
    });
});

// Health check route
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    // console.log(`Server running on http://localhost:${PORT}`);
    console.log(`🚀 Server running on port ${PORT}`);
});

