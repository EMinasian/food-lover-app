import MealsItem from "./MealsItem";

export default function MealsList({ meals }) {
  return (
    <ul>
      {meals.map((meal) => (
        <li>
          <MealsItem meal={meal} />
        </li>
      ))}
    </ul>
  );
}
