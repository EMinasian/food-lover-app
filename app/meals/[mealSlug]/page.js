import getMeals from "@/utils/getMeals";
import HeadingComponent from "@/components/HeadingComponent";

export default async function DynamicPage({ params }) {
  const meal = await getMeals(params?.mealSlug);

  return <HeadingComponent type="primary">{meal?.title}</HeadingComponent>;
}
