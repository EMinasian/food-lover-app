import Link from "next/link";
import LinkComponent from "@/components/LinkComponent";
import HeroBlock from "@/components/HeroBlock";

export default function MealsPage() {
  return (
    <main>
      <div className="flex px-20">
        <HeroBlock
          heading="Meals Page"
          subHeading="choose your favorite recipe and cook it yourself!"
        >
          <LinkComponent
            type="primary"
            href="/share"
            text="Share Your Favorite Recipe"
          />
        </HeroBlock>
      </div>
    </main>
  );
}
