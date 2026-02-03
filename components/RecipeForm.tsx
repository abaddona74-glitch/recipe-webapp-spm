"use client";

import { Recipe } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RecipeForm({
  recipe,
  onSubmit,
}: {
  recipe?: Recipe;
  onSubmit: (data: Omit<Recipe, "id">) => Promise<void>;
}) {
  const router = useRouter();
  const [title, setTitle] = useState(recipe?.title || "");
  const [ingredients, setIngredients] = useState(recipe?.ingredients || "");
  const [instructions, setInstructions] = useState(recipe?.instructions || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit({ title, ingredients, instructions });
    setLoading(false);
    router.push("/recipes");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded text-black"
          rows={3}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Instructions</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-2 border rounded text-black"
          rows={5}
          required
        />
      </div>
      <div className="flex justify-end gap-2">
        <Link
          href="/recipes"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}
