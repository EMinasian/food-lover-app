import Link from "next/link";
import LinkComponent from "@/components/LinkComponent";
import HeroBlock from "@/components/HeroBlock";
import SlideShow from "@/components/SlideShow";

export default function Home() {
  return (
    <>
      <div className="flex px-20">
        <SlideShow />
        <HeroBlock
          heading="Foodie Application for Learning"
          subHeading="The Main Technologies: Next.js and Tailwind"
        >
          <LinkComponent
            type="secondary"
            href="/community"
            text="Join the Community"
          />
          <LinkComponent
            type="primary"
            href="/meals"
            text="Explore Meals"
          />
        </HeroBlock>
      </div>
    </>
  );
}
