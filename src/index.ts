import express from "express";
import PostRouter from "./routers/post.route.js";
// import { PrismaClient } from "./generated/prisma/index.js";
// const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.use("/api", PostRouter);

const connectionStarter = () => {
  try {
    app.listen(3000, () => console.log("Server is running on port "));
  } catch (error) {
    console.error("error starting server:", error);
  }
};
connectionStarter();
