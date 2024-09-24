"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

interface Recipe {
  id: number;
  name: string;
  image: string;
  // Add other properties if needed
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes)).catch((error) =>
      console.log('Error fetch recipes data:', error));
  }, []); 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {
        recipes.length && recipes.map((recipe: Recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <Image src={recipe.image} alt={recipe.name} width={100} height={100} className="rounded-full" />
          </div>
        ))
      }
    </div>
  );
}
