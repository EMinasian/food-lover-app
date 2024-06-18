import Image from "next/image";
import getMeals from "@/utils/getMeals";
import HeroBlock from "@/components/HeroBlock";
import { notFound } from "next/navigation";
import { DEFAULT_IMAGE_SLUG } from "@/utils/constants";

function handleInstructionItems(instructions) {
  const instruationsItems = instructions?.split("\n\n");

  return (
    <ol className="w-2/3 mx-4 text-white flex flex-col gap-4">
      {instruationsItems?.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  );
}

export async function generateMetadata({ params }) {
  const meal = await getMeals(params?.mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal?.title,
    description: meal?.summary,
  };
}

export default async function MealPage({ params }) {
  const meal = await getMeals(params?.mealSlug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <HeroBlock heading={meal?.title} subHeading={meal?.summary}>
        <span className="text-white">
          by{" "}
          <a
            className="text-orange-500 underline"
            href={`mailto:${meal?.creator_email}`}
          >
            {meal?.creator}
          </a>
        </span>
      </HeroBlock>
      <div className="flex">
        <div className="w-1/4 aspect-square relative mx-4">
          <Image
            src={meal?.image || DEFAULT_IMAGE_SLUG}
            fill
            className="rounded-2xl"
          />
        </div>
        <div>{handleInstructionItems(meal?.instructions)}</div>
      </div>
    </>
  );
}
