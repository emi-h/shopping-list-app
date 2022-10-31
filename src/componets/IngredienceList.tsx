import React, { FC } from "react";
import { IngredienceType } from "src/type/IndredienceType";

type Props = {
  IngredienceArray: IngredienceType[];
};

export const IngredienceList: FC<Props> = ({ IngredienceArray }) => {
  return (
    <div>
      <div className="pt-8 pb-8">
        <h2 className="font-bold text-2xl my-4">Meal list(ticked)</h2>
        <div>
          {IngredienceArray.map((item) => {
            return (
              <div key={item[0]}>
                <span>{item[0]}</span>: <span>{item[1]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
