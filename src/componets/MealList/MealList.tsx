import React, { FC } from "react";
import { MealDataType } from "src/type/MealDataType";

type Props = {
  // [FIX ME]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleMealchoise: any;
  mealArray: MealDataType[];
};

export const MealList: FC<Props> = (props) => {
  // console.log("props", props);
  return (
    <div>
      {props.mealArray.map((meal) => {
        return (
          <div key={meal.id}>
            <button onClick={() => props.handleMealchoise(meal.id)}>
              {meal.checked ? "○" : "✖︎"}
            </button>
            <span>{meal.name}</span>
          </div>
        );
      })}
    </div>
  );
};
