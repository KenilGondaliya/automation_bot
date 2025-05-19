"use server";

import { client } from "@/lib/prisma";
import { onCurrentUser } from ".";

export const findUser = async (clerkId: string) => {
  return await client.user.findUnique({
    where: {
      clerkId,
    },
    include: {
      subscription: true,
      integrations: {
        select: {
          id: true,
          token: true,
          expiresAt: true,
          name: true,
        },
      },
    },
  });
};

export const createUser = async (
  clerkId: string,
  firstName: string,
  lastName: string,
  email: string
) => {
  return await client.user.create({
    data: {
      clerkId,
      firstName,
      lastName,
      email,
      subscription: {
        create: {},
      },
    },
    select: {
      firstName: true,
      lastName: true,
    },
  });
};

export const onUserInfo = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);
    if (profile) return { status: 200, data: profile };
    return { status: 404 }
  } catch (error) {
    return { status: 500}
  }
};
