"use client"
import { useEffect, useState } from "react";
import RecipesOverview from "../recipe/[id]/components/recipeOverview";

export interface Recipe {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: string;
  ingredients: string[]
  instructions: string[]
  // Add other properties if needed
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes", {cache: 'no-store'})
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes)).catch((error) =>
      console.log('Error fetch recipes data:', error));
  }, []); 

  return (
    <div className="grid grid-cols-2 items-center justify-items-center min-h-screen gap-8">
      {
        recipes.length && recipes.map((recipe: Recipe) => (
          <RecipesOverview key={recipe.id} recipe={recipe} />
        ))
      }
    </div>
  );
}
