import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
// import { IngredienceData } from "src/componets/MealList/IngredienceData";
import { mealData } from "src/componets/MealList/MealData";
import { MealDataType } from "src/type/MealDataType";
// import { MealList } from "src/componets/MealList/MealList";

const Home: NextPage = () => {
  const [mealArray, setMealArray] = useState<MealDataType[]>(mealData);
  const [checkedMealArray, setCheckedMealArray] = useState<MealDataType[]>([]);
  // const [mealIngredienceArray, setMealIngredienceArray] =
  //   useState<any>(IngredienceData);

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
    // console.log("newMealIngredienceArray", newMealIngredienceArray);
  };

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
          <ul>
            {/* {mealIngredienceArray.map((mealIngre) => {
              return (
                <li key={Object.keys(mealIngre)}>
                  <span>{Object.keys(mealIngre)}:</span>&nbsp;&nbsp;
                  <span>{Object.values(mealIngre)}</span>
                </li>
              );
            })} */}
          </ul>
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
