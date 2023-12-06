import express from "express";
import cors from "cors";
import connectDB from "./utils/db";
require("dotenv").config();
import userRouter from "./routes/userRoute";

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
