import { Suspense } from "react";
import LinkComponent from "@/components/LinkComponent";
import HeroBlock from "@/components/HeroBlock";
import MealsList from "@/components/MealsList";
import getMeals from "@/utils/getMeals";
import LoadingComponent from "@/components/LoadingComponent";

export const metadata = {
  title: "Meals",
  description: "Meals overview.",
};

async function Meals() {
  const meals = await getMeals();

  return <MealsList meals={meals} heading="Meals Overview" />;
}

export default async function MealsPage() {
  return (
    <>
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
      <Suspense fallback={<LoadingComponent />}>
        <Meals />
      </Suspense>
    </>
  );
}
