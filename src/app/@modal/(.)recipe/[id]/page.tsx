
import { Recipe } from "@/app/components/recipes";
import RecipeFull from "@/app/recipe/[id]/components/recipeFull";
import { Modal } from "@/components/ui/Modal";

type Params = {
  id: string;
}

// Server-side rendering to fetch data based on the product ID
export async function getRecipe(id: string) {

  // Fetch data from API or server-side source
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);

  return res.json();
}

export default async function Recipes({params} : { params: Params}) {
  console.log('Recipes Page')
  const recipe: Recipe = await getRecipe(params.id);

  if (!recipe?.id) {
    return (
      <h1 className="text-center">To recipe found</h1>
    )
  }
  return (
    <Modal>
      <RecipeFull {...recipe}/>
    </Modal>
  );
}