import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat.routes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-kappa-three-e36msqmj1f.vercel.app",
  "https://www.srinu.online",
  "https://srinu.online"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    callback(new Error(`Origin ${origin} not allowed by CORS`));
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
};

app.use(cors(corsOptions));

// Remove app.options("*", cors());

app.use(express.json());

app.use("/api/chat", chatRoutes);