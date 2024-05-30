import Link from "next/link";

const classStyle = {
  primary: "bg-orange-700 p-2 text-white",
  secondary: "text-orange-500 p-2",
};

export default function LinkComponent({ href, text, type }) {
  return (
    <Link className={classStyle[type]} href={href}>
      {text}
    </Link>
  );
}
