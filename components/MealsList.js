import MealsItem from "./MealsItem";
import HeadingComponent from "./HeadingComponent";

export default function MealsList({ meals, heading }) {
  return (
    <div className="px-8 flex flex-col items-center">
      <HeadingComponent type="primary">{heading}</HeadingComponent>
      <ul className="grid grid-cols-3 p-2">
        {meals.map((meal) => (
          <li>
            <MealsItem meal={meal} />
          </li>
        ))}
      </ul>
    </div>
  );
}
