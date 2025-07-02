import express from "express";
import PostRouter from "./routers/post.route.js";
// import { PrismaClient } from "./generated/prisma/index.js";
// const prisma = new PrismaClient();
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api", PostRouter);

const port = process.env.PORT || 4000;

const connectionStarter = () => {
  try {
    app.listen(port, () => console.log(`✅ Server is running on port ${port}`));
  } catch (error) {
    console.error("error starting server:", error);
  }
};
connectionStarter();
