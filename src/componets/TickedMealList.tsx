import React, { FC } from "react";
import { MealDataType } from "src/type/MealDataType";

export const TickedMealList: FC<{ TickedMealArray: MealDataType[] }> = ({
  TickedMealArray,
}) => {
  return (
    <div>
      <div className="pt-8 pb-8">
        <h2 className="font-bold text-2xl my-4">Meal list(ticked)</h2>
        <div>
          {TickedMealArray.map((meal) => {
            return (
              <div key={meal.id}>
                <div>{meal.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
