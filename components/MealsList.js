export default function MealsList({ meals }) {
  return (
    <ul>
      {meals.map((meal) => (
        <li>
          <h2>{meal.name}</h2>
        </li>
      ))}
    </ul>
  );
}
