
import type { Recipe } from "@/app/components/recipes";



export default async function RecipeFull(recipe: Recipe) {

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className={`h-[300px] w-full bg-cover bg-[50%_30%]`} style={{ backgroundImage: `url(https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp)` }}></div>
        <div className="flex item-center justify-center">
          <div className="p-5 max-w-screen-md w-full">
            <h2 className="font-bold text-xl">{recipe.name}</h2>
            <p className="pb-8"> {recipe.cuisine} | {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins | {recipe.difficulty}</p>
            <div className="grid sm:grid-cols-[260px_1fr] grid-cols-1 gap-8">
              <div className=" bg-slate-50 p-5 shadow-md">
                <h3 className="font-medium pb-4">Ingredients</h3>
                <ol className="list-decimal pl-4">
                  {
                    recipe?.ingredients.map((i) => (
                      <li key={i} className="pb-4"> {i}</li>
                    ))
                  }
                </ol>
              </div>
              <div className="flex-1 pt-5">
                <h3 className="font-medium pb-4">Directions</h3>
                {
                  recipe?.instructions.map((i) => (
                    <p className="pb-4" key={i}> {i}</p>
                  ))
                }
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}