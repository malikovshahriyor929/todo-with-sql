import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();
class PostService {
    async getall() {
        return prisma.post.findMany();
    }
    async create(title) {
        return prisma.post.create({
            data: {
                title,
            },
        });
    }
    async delete(id) {
        try {
            await prisma.post.delete({ where: { id } });
        }
        catch (error) {
            throw new Error("Post not found or already deleted");
        }
        return prisma.post.findMany({
            where: {
                NOT: { id },
            },
        });
    }
    async edit(id, title) {
        const post = await prisma.post.update({
            where: { id },
            data: { title },
        });
        if (!post) {
            throw new Error("Post not found");
        }
        return post;
    }
    async getOne(id) {
        const post = await prisma.post.findFirst({
            where: { id },
        });
        if (!post) {
            throw new Error("Post not found");
        }
        return post;
    }
}
export default new PostService();
