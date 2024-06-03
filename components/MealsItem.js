import Link from "next/link";
import HeadingComponent from "./HeadingComponent";

export default function MealsItem({ meal }) {
  return (
    <div className="w-4/12 bg-slate-800 p-4 m-4 rounded-2xl">
      <Link href={`/meals/${meal?.slug}`}>
        <HeadingComponent type="secondary">{meal?.title}</HeadingComponent>
        <p className="text-white py-2">{meal?.summary}</p>
      </Link>
    </div>
  );
}
