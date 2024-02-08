import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/usersRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import bodyParser from "body-parser";

dotenv.config();
connectDB();

const app = express();

// accept form data ... req.body (for Postman)
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

// For In App use
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running....");
});

app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`)
);
