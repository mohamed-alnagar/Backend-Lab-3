const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// ✅ Load environment variables
dotenv.config();

const usersRouter = require("./routers/usersRouter");
const postsRouter = require("./routers/postsRouter");

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Routers
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// ✅ Environment variables
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ Connect to MongoDB first, then start the server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB", err));