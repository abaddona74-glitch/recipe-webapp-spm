"use client";

import { createRecipeAction } from "@/app/actions";
import RecipeForm from "@/components/RecipeForm";

export default function CreateRecipePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Create Recipe</h1>
      <RecipeForm onSubmit={createRecipeAction} />
    </main>
  );
}
