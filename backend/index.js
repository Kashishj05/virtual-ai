import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectdb from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  connectdb();
  console.log("server start");
});

// "https://virtual-ai-3.onrender.com",
// "https://virtual-ai-t2nq.onrender.com",
