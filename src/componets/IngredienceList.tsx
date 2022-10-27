import React, { FC } from "react";
// import { MealDataType } from "src/type/MealDataType";

export const IngredienceList: FC<any> = (props) => {
  const total = props.IngredienceArray;

  //   console.log("mealArrayCh_comp", TickedMealArray);

  return (
    <div>
      <div className="pt-8 pb-8">
        <h2 className="font-bold text-2xl my-4">Meal list(ticked)</h2>
        <div>
          {Object.keys(total).map((i) => {
            return (
              <>
                <div key={i}>
                  <span>{i}</span>: <span>{total[i]}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
