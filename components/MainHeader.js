import Link from "next/link";
import logoImage from "@/assets/logo.png";

const headerNavigationItems = [
  { link: "/community", text: "Community" },
  { link: "/meals", text: "Meals" },
];

export default function MainHeader() {
  return (
    <header className="flex flex-row justify-around items-center py-4 px-24">
      <Link
        href="/"
        className="flex flex-row gap-4 items-center font-bold text-2xl text-white"
      >
        <img src={logoImage.src} className="w-[10%]" />
        Home Page
      </Link>

      <nav>
        <ul className="flex flex-row gap-8">
          {headerNavigationItems.map((item) => (
            <li>
              <Link href={item.link} className="font-bold text-2xl text-white">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
