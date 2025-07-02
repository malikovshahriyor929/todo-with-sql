// import { PrismaClient } from "../generated/prisma/index.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostService {
  async getall() {
    return prisma.post.findMany();
  }
  async create(title: string) {
    return prisma.post.create({
      data: {
        title,
      },
    });
  }
  async delete(id: number) {
    try {
      await prisma.post.delete({ where: { id } });
    } catch (error) {
      throw new Error("Post not found or already deleted");
    }
    return prisma.post.findMany({
      where: {
        NOT: { id },
      },
    });
  }
  async edit(id: number, title: string) {
    const post = await prisma.post.update({
      where: { id },
      data: { title },
    });
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  }
  async getOne(id: number) {
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
