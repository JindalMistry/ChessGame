import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger-output.json" assert { type: "json" };
import UserController from "./controllers/userController.js";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file
const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
const PORT = process.env.PORT || 3000;

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("", UserController);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
