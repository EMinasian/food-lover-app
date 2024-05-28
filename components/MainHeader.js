import Link from "next/link";
import logoImage from "@/assets/logo.png";

const headerNavigationItems = [
  { link: "/community", text: "Community" },
  { link: "/meals", text: "Meals" },
];

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImage.src} />
        Home Page
      </Link>

      <nav>
        <ul>
          {headerNavigationItems.map((item) => (
            <li>
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
