"use server";
import saveMeal from "@/utils/saveMeal";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function fieldsInvalid(fields) {
  return fields?.some((filed) => !filed || filed?.trim() === "");
}

export default async function shareAction(prevState, formData) {
  const meal = {
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
  };

  if (fieldsInvalid(Object.values(meal))) {
    return { message: "error" };
  }

  const slug = await saveMeal(meal);
  revalidatePath('/meals')
  redirect(`/meals/${slug}`);
}
