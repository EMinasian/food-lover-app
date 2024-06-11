"use client";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker() {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInputRef = useRef();

  function imageChangeHandler(event) {
    const file = event.target.files[0];

    if (!file) {
      setSelectedImage(null)
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div>
      <button
        type="button"
        className="bg-amber-500 py-1 px-8 font-semibold rounded-md text-sm"
        onClick={() => {
          imageInputRef.current.click();
        }}
      >
        Choose image
      </button>
      <label className="invisible">
        <input
          type="file"
          name="image"
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={imageChangeHandler}
        />
      </label>
      {selectedImage && (
        <div className="p-8 border-2 border-orange-600 m-4 rounded-lg flex justify-center">
          <Image src={selectedImage} fill className="w-3/4" />
        </div>
      )}
    </div>
  );
}
