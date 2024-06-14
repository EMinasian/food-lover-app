import sql from "better-sqlite3";
import { redirect } from "next/navigation";
const db = sql("meals.db");
import { getSlug } from "./prepareData";

export default async function saveMeal(meal) {
  await new Promise((resolve) => setTimeout(resolve, 3 * 1000)); //for learning purposes
  const slug = getSlug(meal.title);
  db.prepare(
    `
        INSERT INTO meals
         (title, summary, instructions, creator, creator_email, slug)
        VALUES (@title, @summary, @instructions, @creator, @creator_email, @slug)
        `
  ).run({ ...meal, slug });
  redirect(`/meals/${slug}`);
}
