const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv')
const usersRouter = require("./routers/usersRouter");
const postsRouter = require("./routers/postsRouter");
const app=express();

app.use(express.json());
app.use(cors());


dotenv.config();
app.use("/users", usersRouter);
app.use('/posts',postsRouter)


const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB", err));
});