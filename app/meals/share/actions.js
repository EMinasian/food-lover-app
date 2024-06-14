"use server";
import saveMeal from "@/utils/saveMeal";

export default async function shareAction(formData) {
  const meal = {
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
  };

  await saveMeal(meal);
}
