"use client";
import { useRef } from "react";

export default function ImagePicker() {
  const imageInputRef = useRef();

  return (
    <div>
      <button
        type="button"
        className="bg-amber-500 py-1 px-8 mx-2 font-semibold rounded-md text-sm"
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
        />
      </label>
    </div>
  );
}
