import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();

    if (!user) return { status: 403 };

    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (existingUser) return { status: 200, user: existingUser };

    const newUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.emailAddresses[0].emailAddress,
        profilePicture: user.imageUrl,
      },
    });

    if (!newUser) return { status: 400, message: "Failed to create user" };

    return { status: 201, user: newUser };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return { status: 500, message: error.message };
    }
    return { status: 500, message: "Internal server error" };
  }
};
