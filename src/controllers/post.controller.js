import { PrismaClient } from "../generated/prisma/index.js";
import postService from "../services/post.service.js";
const prisma = new PrismaClient();
class PostService {
    async getAll(_, res) {
        try {
            const allposts = await postService.getall();
            res.status(200).json(allposts);
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async createPost(req, res) {
        try {
            const { title } = req.body;
            if (!title) {
                res.status(400).json("post gonna be error please try again");
            }
            const creates = await postService.create(title);
            res.status(200).json(creates);
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async deletePost(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json("post gonna be error please try again");
            }
            const creates = await postService.delete(+id);
            res.status(200).json(creates);
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async editPost(req, res) {
        try {
            const { id } = req.params;
            const { title } = req.body;
            if (!id) {
                res.status(400).json("post gonna be error please try again");
            }
            const edit = await postService.edit(+id, title);
            res.status(200).json(edit);
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async getById(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json("post gonna be error please try again");
            }
            const getone = await postService.getOne(+id);
            res.status(200).json(getone);
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}
export default new PostService();
