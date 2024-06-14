import Link from "next/link";
import Image from "next/image";
import HeadingComponent from "../HeadingComponent";
import { DEFAULT_IMAGE_SLUG } from "@/utils/constants";

export default function MealsItem({ meal }) {
  return (
    <div className="bg-slate-800 m-4 rounded-2xl">
      <Link href={`/meals/${meal?.slug}`}>
        <div className="relative w-full aspect-square">
          <Image
            src={meal?.image || DEFAULT_IMAGE_SLUG}
            fill
            objectFit="contain"
            className="rounded-t-2xl"
          />
        </div>
        <div className="p-4">
          <HeadingComponent type="secondary">{meal?.title}</HeadingComponent>
          <p className="text-white py-2">{meal?.summary}</p>
        </div>
      </Link>
    </div>
  );
}
