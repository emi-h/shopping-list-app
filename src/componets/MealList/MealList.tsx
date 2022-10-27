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
    <>
      <h2 className="font-bold text-2xl my-4">Click the Meals!</h2>
      <div>
        {props.mealArray.map((meal) => {
          return (
            <div key={meal.id}>
              <button onClick={() => props.handleMealchoise(meal.id)}>
                <span>{meal.checked ? "○" : "✖︎"}</span>
                <span>{meal.name}</span>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
