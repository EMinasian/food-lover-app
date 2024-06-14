"use server";
import saveMeal from "@/utils/saveMeal";

function fieldsInvalid(fields) {
  return fields?.some((filed) => !filed || filed?.trim() === "");
}

export default async function shareAction(formData) {
  const meal = {
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
  };

  if (fieldsInvalid(Object.values(meal))) {
    throw new Error("The fileds in the form are invalid.");
  }

  await saveMeal(meal);
}
