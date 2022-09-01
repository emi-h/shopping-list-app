import React, { FC } from "react";
import { MealDataType } from "src/type/MealDataType";

export const MealList: FC<{ mealArray: MealDataType[] }> = ({ mealArray }) => {
  return (
    <div>
      {mealArray.map((meal) => {
        return (
          <div key={meal.id}>
            <label>
              <input type="checkbox" checked={true} />
              {meal.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};
