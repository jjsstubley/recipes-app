"use client"
import Image from "next/image";
import Link from "next/link";
import { Recipe } from "@/app/components/recipes";

interface Props {
  recipe: Recipe;
}

export default function RecipesOverview({ recipe }: Props ) {

  return (
    <Link href={`/recipe/${recipe.id}`}>
        <div className="shadow-md relative">
            <div className="absolute top-0 left-0 bg-black/30 h-full w-full text-white p-5">
                <h2 className="font-bold text-xl">{recipe.name}</h2>
                <p> {recipe.cuisine} | {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins | {recipe.difficulty}</p>
            </div>
            <Image src={recipe.image} alt={recipe.name} width={600} height={600} priority={true} />
        </div>
    </Link>
  );
}
