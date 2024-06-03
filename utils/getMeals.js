import sql from "better-sqlite3";

const db = sql("meals.db");

export default async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2 * 1000)); //for learning purposes
  return db.prepare("SELECT * FROM MEALS").all();
}
