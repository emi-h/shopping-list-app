import { Button, CopyButton } from "@mantine/core";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import { FC, useEffect, useState } from "react";
import { IngredienceType } from "src/type/IndredienceType";
import { MealDataType } from "src/type/MealDataType";

import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const App: FC = () => {
  const [mealArray, setMealArray] = useState<MealDataType[]>([]);
  const [checkedMealArray, setCheckedMealArray] = useState<MealDataType[]>([]);
  const [IngredienceArray, setIngredienceArray] = useState<IngredienceType[]>(
    []
  );

  // supabaseからデータ取得して、stateに
  const supabase = useSupabaseClient();
  const Fetch = async () => {
    const { data: mealData, error } = await supabase
      .from("menuArray")
      .select("*");
    if (error) {
      throw new Error(error.message);
    }
    return setMealArray(mealData);
  };
  useEffect(() => {
    Fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      return meal.ingredienceJson.ingredience;
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
  // console.log("Object.entries(total)", Object.entries(total));
  // console.log("Object.entries(total).join", Object.entries(total).join(""));

  const copyText = Object.entries(total).join("/");

  // 手持ちの材料をマイナスする
  // const handleReduceIngredience = (e: ChangeEvent<HTMLInputElement>) => {
  //   setReduceNumber(e.target.value);
  //   console.log(e.target.value);
  // };
  // console.log("reduceValueArray", reduceValueArray);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Shopping list generator</title>
          <meta
            name="description"
            content="Generate your shopping list by choosing recipes!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex-grow">
          <div className="flex align-center justify-between">
            <h1 className="text-center text-xl">Shopping list generator :)</h1>
            <Nav />
          </div>
          {/* Meal list */}
          <div className="pt-8 pb-8">
            <h2 className="font-bold text-2xl my-4">
              1.Meal list：Choose menu and click the button.
            </h2>
            <div>
              {mealArray.map((meal) => {
                return (
                  <div key={meal.id}>
                    <button
                      onClick={() => {
                        handleMealchoise(meal.id);
                      }}
                      className="mr-4"
                    >
                      <span className="mr-2">{meal.checked ? "○" : "✖︎"}</span>
                      <span>{meal.name}</span>
                    </button>
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
            <h2 className="font-bold text-2xl my-4">
              2.Meal list(ticked)：check the menu you chose.
            </h2>
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
          {/* <IngredienceList total={total} /> */}
          <div className="pt-8 pb-8">
            <h2 className="font-bold text-2xl my-4">
              3.Ingredience list：Generated the ingredience list from your meal.
            </h2>
            <div className="mb-4">
              {/* Object.keys(total)でkeyの配列を作成 */}
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
            <CopyButton value={copyText}>
              {({ copied, copy }) => (
                <Button color={copied ? "teal" : "blue"} onClick={copy}>
                  {copied ? "Copied!" : "Copy Ingredience list"}
                </Button>
              )}
            </CopyButton>
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

        <Footer />
      </div>
    </div>
  );
};
