import getMeals from "@/utils/getMeals";
import HeadingComponent from "@/components/HeadingComponent";

export default async function DynamicPage({ params }) {
  const meal = await getMeals(params?.mealSlug);

  return (
    <main className="p-16">
      <HeadingComponent type="primary">{meal?.title}</HeadingComponent>
    </main>
  );
}
