
import type { Recipe } from "@/app/components/recipes";


type Params = {
  id: string;
  
}


// Server-side rendering to fetch data based on the product ID
export async function getRecipe(id: string) {

  // Fetch data from API or server-side source
  const res = await fetch(`https://dummyjson.com/recipes/${id}`, {cache: 'no-store'});
  console.log('res', res)
  return res.json();
}

export default async function Recipe({params} : { params: Params}) {
  const recipe: Recipe = await getRecipe(params.id);
  

  if (!recipe?.id) {
    return (
      <h1 className="text-center">No recipe found</h1>
    )
  }
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className={`h-[300px] w-full bg-cover bg-[50%_30%]`} style={{ backgroundImage: `url(https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp)` }}></div>
        <div className="flex item-center justify-center">
          <div className="p-5 max-w-screen-md">
            <h2 className="font-bold text-xl">{recipe.name}</h2>
            <p className="pb-8"> {recipe.cuisine} | {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins | {recipe.difficulty}</p>
            <ol className="list-decimal pl-4 pb-8">
              {
                recipe?.ingredients.map((i) => (
                  <li key={i}> {i}</li>
                ))
              }
            </ol>
            <div>
              {
                recipe?.instructions.map((i) => (
                  <p className="pb-4" key={i}> {i}</p>
                ))
              }
            </div>
        </div>
      </div>

    </div>
  );
}