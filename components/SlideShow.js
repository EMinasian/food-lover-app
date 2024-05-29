import Image from "next/image";
import burgerImage from "../assets/burger.jpg";

export default function SlideShow() {
  return (
    <div className="p-20">
      <Image width={360} src={burgerImage} priority alt="burger" />
    </div>
  );
}
