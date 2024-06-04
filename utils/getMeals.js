import sql from "better-sqlite3";

const db = sql("meals.db");

export default async function getMeals(mealSlug) {
  await new Promise((resolve) => setTimeout(resolve, 5 * 1000)); //for learning purposes

  if (mealSlug) {
    const meals = db.prepare(`SELECT * FROM MEALS WHERE slug = @mealSlug`).all({
      mealSlug,
    });
    return meals[0];
  }

  return db.prepare("SELECT * FROM MEALS").all();
}
