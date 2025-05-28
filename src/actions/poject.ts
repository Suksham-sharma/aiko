"use server";

import { prisma } from "@/lib/prisma";
import { onAuthenticatedUser } from "./user";

export const getAllProjects = async () => {
  try {
    const findUser = await onAuthenticatedUser();

    if (findUser.status !== 200 || !findUser.user) {
      return { status: 403, message: "User not Authenticated" };
    }

    const projects = await prisma.project.findMany({
      where: {
        userId: findUser.user.id,
        isDeleted: false,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 20,
    });

    if (projects.length === 0)
      return { status: 404, message: "No projects found" };

    return { status: 200, projects };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return { status: 500, message: error.message };
    }
    return { status: 500, message: "Internal server error" };
  }
};
