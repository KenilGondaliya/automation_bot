"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { updateIntegration } from "../integrations/queries";

export const onCurrentUser = async () => {
  console.log("Running onCurrentUser...");
  try {
    const user = await currentUser();
    console.log("Current user result:", user);
    if (!user) {
    //   console.log("No user found, redirecting to /sign-in");
      return redirect("/sign-in");
    }
    // console.log("User found:", user);
    return user;
  } catch (error) {
    console.error("Error in onCurrentUser:", error);
    console.log("Redirecting to /sign-in due to error");
    return redirect("/sign-in");
  }
};

export const onBoardUser = async () => {
  console.log("Starting onBoardUser...");
  const user = await onCurrentUser();
  console.log("User from onBoardUser:", user);

  try {
    console.log("Finding user with ID:", user.id);
    const found = await findUser(user.id);
    console.log("Found user:", found);
    if (found) {
      if (found.integrations.length > 0) {
        const today = new Date();
        const time_left =
          found.integrations[0].expiresAt?.getTime()! - today.getTime();
        const days = Math.round(time_left / (1000 * 3600 * 24));
        console.log("Days left for token:", days);

        if (days < 5) {
          console.log("Refreshing token...");
          if (found.integrations[0].token) {
            const refresh = await refreshToken(found.integrations[0].token);
            console.log("Refresh token response:", refresh);

            const today = new Date();
            const expire_date = new Date(today.setDate(today.getDate() + 60));
            const update_token = await updateIntegration(
              refresh.access_token,
              expire_date,
              found.integrations[0].id
            );
            console.log("Update token result:", update_token);
          }
        }

        console.log("Returning status 200 for existing user");
        return {
          status: 200,
          data: {
            firstname: found.firstName,
            lastname: found.lastName,
          },
        };
      }
      console.log("User exists but no integrations found");
      return {
        status: 200,
        data: {
          firstname: found.firstName,
          lastname: found.lastName,
        },
      };
    }

    console.log("Creating new user...");
    const created = await createUser(
      user.id,
      user.firstName!,
      user.lastName!,
      user.emailAddresses[0].emailAddress
    );
    console.log("Created user:", created);
    return {
      status: 201,
      data: {
        firstname: created.firstName,
        lastname: created.lastName,
      },
    };
  } catch (error) {
    console.error("Error in onBoardUser:", error);
    return { status: 500 };
  }
};
