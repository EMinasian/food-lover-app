"use client";

import Image from "next/image";
import burgerImage from "../assets/burger.jpg";
import pizzaImage from "../assets/pizza.jpg";
import curryImage from "../assets/curry.jpg";
import schnitzelImage from "../assets/schnitzel.jpg";
import { useEffect, useState } from "react";

const slides = [
  { source: burgerImage, alternative: "burger" },
  { source: pizzaImage, alternative: "pizza" },
  { source: curryImage, alternative: "curry" },
  { source: schnitzelImage, alternative: "schnitzel" },
];

export default function SlideShow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5 * 1000);
  }, []);

  console.log("index", index);

  return (
    <div className="p-20">
      <Image
        width={360}
        src={slides[index]?.source}
        priority
        alt={slides[index]?.alternative}
      />
    </div>
  );
}
