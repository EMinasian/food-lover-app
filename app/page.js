import HeroBlock from "@/components/HeroBlock";
import SlideShow from "@/components/SlideShow";

export default function Home() {
  return (
    <main>
      <div className="flex px-20">
        <SlideShow />
        <HeroBlock />
      </div>
    </main>
  );
}
