import Recipes from "./components/recipes";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">
        <div>
          <h1 className="text-2xl pb-4 font-bold"> All Recipes</h1>
        </div>
        <Recipes />
      </main>
    </div>
  );
}