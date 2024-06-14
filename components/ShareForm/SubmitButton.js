"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disable={pending}
      type="submit"
      className="bg-orange-700 py-2 px-8 m-2 text-white font-semibold rounded-md"
    >
      {pending ? "Submitting" : "Save"}
    </button>
  );
}
