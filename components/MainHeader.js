import Link from "next/link";
import Image from "next/image";
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
        <Image src={logoImage} alt="a dish of food" width={100} priority/>
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
