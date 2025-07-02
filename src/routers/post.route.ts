import express from "express";
import postController from "../controllers/post.controller.js";
const router = express.Router();

router.get("/getAll", postController.getAll);
router.post("/create", postController.createPost);
router.delete("/delete/:id", postController.deletePost);
router.put("/edit/:id", postController.editPost);
router.get("/getById/:id", postController.getById);

export default router;
