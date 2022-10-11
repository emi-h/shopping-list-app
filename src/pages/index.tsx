import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { mealData } from "src/componets/MealList/MealData";
import { IngredienceType } from "src/type/IndredienceType";
import { MealDataType } from "src/type/MealDataType";
// import {
//   ReduceValueArrayType,
//   ReduceValueType,
// } from "src/type/reduceValueArrayType";

const Home: NextPage = () => {
  const [mealArray, setMealArray] = useState<MealDataType[]>(mealData);
  const [checkedMealArray, setCheckedMealArray] = useState<MealDataType[]>([]);
  const [IngredienceArray, setIngredienceArray] = useState<IngredienceType[]>(
    []
  );
  // const [reduceNumber, setReduceNumber] = useState<number>();

  // クリックしたメニューの配列を作成
  const handleMealchoise = (id: number) => {
    const newMealArray = mealArray.map((mealArray) => {
      if (mealArray.id === id) {
        mealArray.checked = !mealArray.checked;
      }
      return mealArray;
    });
    setMealArray(newMealArray);
  };

  // 決定したメニューの材料の配列を作成
  const handleSetMeal = () => {
    const newMealArray = mealArray.filter((meal) => meal.checked);
    setCheckedMealArray(newMealArray);
    const newIngredienceArray = newMealArray.map((meal) => {
      return meal.ingredience;
    });
    setIngredienceArray(newIngredienceArray);
  };

  // 同じ材料を計算して配列を作成
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
  // console.log("total", total);

  // 手持ちの材料をマイナスする
  // const handleReduceIngredience = (e: ChangeEvent<HTMLInputElement>) => {
  //   setReduceNumber(e.target.value);
  //   console.log(e.target.value);
  // };
  // console.log("reduceValueArray", reduceValueArray);

  return (
    <div className="m-8 text-xl flex flex-col min-h-screen">
      <Head>
        <title>Shopping list generator</title>
        <meta
          name="description"
          content="Generate your shopping list by choosing recipes!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-grow">
        <h1 className="text-center text-5xl">Shopping list generator</h1>
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
        {/* Ingredience you already have */}
        {/* <div className="pt-8 pb-8">
          <h2 className="font-bold text-2xl my-4">
            Ingredience you already have
          </h2>
          <div>
            {Object.keys(total).map((i) => {
              return (
                <>
                  <div key={i} className="mb-4">
                    <span>{i}</span>:{" "}
                    <span>
                      {" "}
                      <input
                        type="number"
                        onChange={handleReduceIngredience}
                        value={reduceNumber}
                      />
                    </span>
                    <span> To shop → </span>
                    <span>{total[i] - reduceNumber}</span>
                  </div>
                </>
              );
            })}
          </div>
        </div> */}
        {/* Shopping list */}
        {/* <div className="pt-8 pb-8">
          <h2 className="font-bold text-2xl my-4">Shopping list</h2>
          <ul>
            {mealIngredienceArray.map((mealIngre) => {
              return (
                <li key={mealIngre}>
                  <div>mince:{mealIngre.mince}</div>
                </li>
              );
            })}
          </ul>
        </div> */}
      </main>

      <footer>
        <p className="m-100 text-center">Made by Emi in 2022</p>
      </footer>
    </div>
  );
};

export default Home;
