import LinkComponent from "@/components/LinkComponent";
import HeroBlock from "@/components/HeroBlock";
import MealsList from "@/components/MealsList";
import getMeals from "@/utils/getMeals";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <main>
      <HeroBlock
        heading="Meals Page"
        subHeading="choose your favorite recipe and cook it yourself!"
      >
        <LinkComponent
          type="primary"
          href="/meals/share"
          text="Share Your Favorite Recipe"
        />
      </HeroBlock>
      <MealsList meals={meals} heading="Meals Overview"/>
    </main>
  );
}
