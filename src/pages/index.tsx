import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { mealData } from "src/componets/MealList/MealData";
import { MealDataType } from "src/type/MealDataType";

const Home: NextPage = () => {
  const [mealArray, setMealArray] = useState<MealDataType[]>(mealData);
  const [checkedMealArray, setCheckedMealArray] = useState<MealDataType[]>([]);
  const [IngredienceArray, setIngredienceArray] = useState<any[]>([]);

  const handleMealchoise = (id: number) => {
    const newMealArray = mealArray.map((mealArray) => {
      if (mealArray.id === id) {
        mealArray.checked = !mealArray.checked;
      }
      return mealArray;
    });
    setMealArray(newMealArray);
  };

  const handleSetMeal = () => {
    const newMealArray = mealArray.filter((meal) => meal.checked);
    setCheckedMealArray(newMealArray);
    const newIngredienceArray = newMealArray.map((meal) => {
      return meal.ingredience;
    });
    setIngredienceArray(newIngredienceArray);
  };

  // 同じ材料を計算して配列を作る
  const total = IngredienceArray.reduce(
    (s1, e) =>
      Object.entries(e).reduce(
        (s2, [k, v]) => ({
          ...s2,
          [k]: (s2[k] || 0) + v,
        }),
        s1
      ),
    {}
  );

  return (
    <div className="m-8">
      <Head>
        <title>Shopping list generator</title>
        <meta
          name="description"
          content="Generate your shopping list by choosing recipes!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center">Shopping list generator</h1>
      <main>
        {/* Meal list */}
        <div className="pt-8 pb-8">
          <h2 className="font-bold text-2xl my-4">Meal list</h2>
          <div>
            {mealArray.map((meal) => {
              return (
                <div key={meal.id}>
                  <button
                    onClick={() => {
                      handleMealchoise(meal.id);
                    }}
                  >
                    {meal.checked ? "○" : "✖︎"}
                  </button>
                  <span>{meal.name}</span>
                </div>
              );
            })}
          </div>
          <button className="border p-4 mt-8" onClick={handleSetMeal}>
            Set a meal list
          </button>
        </div>
        {/* Meal list(ticked) */}
        <div className="pt-8 pb-8">
          <h2 className="font-bold text-2xl my-4">Meal list(ticked)</h2>
          <div>
            {checkedMealArray.map((meal) => {
              return (
                <div key={meal.id}>
                  <div>{meal.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Ingredience list */}
        <div className="pt-8 pb-8">
          <h2 className="font-bold text-2xl my-4">Ingredience list</h2>
          <div>
            {Object.keys(total).map((e) => {
              return (
                <>
                  <div key={e}>
                    <span>{e}</span>: <span>{total[e]}</span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* Shopping list */}
        <div className="pt-8 pb-8">
          <h2 className="font-bold text-2xl my-4">Shopping list</h2>
          <ul>
            {/* {mealIngredienceArray.map((mealIngre) => {
              return (
                <li key={mealIngre}>
                  <div>mince:{mealIngre.mince}</div>
                </li>
              );
            })} */}
          </ul>
        </div>
      </main>

      <footer>
        <p className="m-100 text-center">Made by Emi</p>
      </footer>
    </div>
  );
};

export default Home;
