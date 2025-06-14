"use server";

import { profileSchema, validateWithZodSchema } from "./schemas";
import db from "./db";
import { currentUser, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Helper function

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};



export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    const client = await clerkClient();
    if (!user) throw new Error("Please login to create a profile!");

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validatedFields,
      },
    });
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
        role: "user",
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/");
};


export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });
  return profile?.profileImage;
};


export const fetchProfile = async () => {
  const user = await getAuthUser();

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if (!profile) return redirect("/profile/create");
  return profile;
};

export const updateProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedFields,
    });

    revalidatePath("/profile");
    return { message: "Profile updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

// export const updateProfileImageAction = async (
//   prevState: any,
//   formData: FormData
// ): Promise<{ message: string }> => {
//   const user = await getAuthUser();
//   try {
//     const image = formData.get("image") as File;
//     const validatedFields = validateWithZodSchema(imageSchema, { image });

//     return { message: "Profile image updated successfully" };
//   } catch (error) {
//     return renderError(error);
//   }
// };

// export const getAuthUserWithRole = async () => {
//   const user = await currentUser();
//   if (!user) throw new Error("You must be logged in to access this route");

//   const role = user.privateMetadata.role;
//   if (!role) throw new Error("User role not found in metadata");

//   return {
//     ...user,
//     role,
//   };
// };
