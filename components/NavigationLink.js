"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function NavigationLink({ link, children }) {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`font-bold text-2xl ${
        pathname === link || (pathname.indexOf(link) !== -1 && link !== "/")
          ? "text-orange-400 drop-shadow-2xl"
          : "text-white"
      }`}
    >
      {children}
    </Link>
  );
}
