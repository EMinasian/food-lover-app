import Link from "next/link";

export default function HeroBlock() {
  return (
    <div className="flex flex-col p-24 gap-2">
      <h2 className="text-3xl font-bold text-amber-500">
        Foodie Application for Learning
      </h2>
      <p className="text-xl font-semibold text-amber-500">
        The Main Technologies: Next.js and Tailwind
      </p>
      <div className="flex gap-4 py-2">
        <Link className="text-orange-500 p-2" href="/community">
          Join the Community
        </Link>
        <Link className="bg-orange-700 p-2 text-white" href="/meals">
          Explore Meals
        </Link>
      </div>
    </div>
  );
}
