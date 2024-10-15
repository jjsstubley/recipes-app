
import type { Recipe } from "@/app/components/recipes";
import RecipeFull from './components/recipeFull'

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

export default async function RecipePage({params} : { params: Params}) {
  const recipe: Recipe = await getRecipe(params.id);
  

  if (!recipe?.id) {
    return (
      <h1 className="text-center">No recipe found</h1>
    )
  }
  return (
    <RecipeFull {...recipe} />
  );
}