import HeroBlock from "@/components/HeroBlock";
import ShareForm from "@/components/ShareForm/ShareForm";
import shareAction from "./actions";


export default function SharePage() {
  return (
    <>
      <HeroBlock
        heading="Share Your Meals"
        subHeading="What meals do you like the most?"
      />
      <ShareForm action={shareAction} />
    </>
  );
}
