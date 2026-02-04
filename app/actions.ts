"use server";

import { addRecipe, deleteRecipe, updateRecipe } from "@/lib/data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createRecipeAction(data: {
  title: string;
  ingredients: string;
  instructions: string;
  image?: string;
}) {
  await addRecipe(data);
  revalidatePath("/recipes");
}

export async function updateRecipeAction(
  id: string,
  data: {
    title: string;
    ingredients: string;
    instructions: string;
    image?: string;
  }
) {
  await updateRecipe(id, data);
  revalidatePath("/recipes");
}

export async function deleteRecipeAction(id: string) {
  await deleteRecipe(id);
  revalidatePath("/recipes");
}
