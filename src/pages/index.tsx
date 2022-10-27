import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "src/componets/Footer";
import { Header } from "src/componets/Header";
import { IngredienceList } from "src/componets/IngredienceList";
import { mealData } from "src/componets/MealList/MealData";
import { MealList } from "src/componets/MealList/MealList";
import { TickedMealList } from "src/componets/TickedMealList";
import { IngredienceType } from "src/type/IndredienceType";
import { MealDataType } from "src/type/MealDataType";

import { supabase } from "./lib/supabaseClient";

const Home: NextPage = () => {
  const [mealArray, setMealArray] = useState<MealDataType[]>(mealData);
  const [TickedMealArray, setTickedMealArray] = useState<MealDataType[]>([]);
  const [IngredienceArray, setIngredienceArray] = useState<IngredienceType[]>(
    []
  );

  async function getMenu() {
    const {
      data: menuArray,
      error,
      status,
    } = await supabase
      .from("menus")
      .select("id,name,checked,ingrediences(ingre_amount)");

    if (menuArray) {
      setMealArray(menuArray);
    }
  }
  useEffect(() => {
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMealchoise = (id: number) => {
    // クリックしたメニューのidを反転して新しい配列を作成
    const newMealArray = mealArray.map((mealArray) => {
      if (mealArray.id === id) {
        mealArray.checked = !mealArray.checked;
      }
      return mealArray;
    });
    setMealArray(newMealArray);

    //チェックされたものだけ取り出して配列作成
    const newMealArray02 = mealArray.filter((meal) => meal.checked);
    setTickedMealArray(newMealArray02);

    // 決定したメニューの材料の配列IngredienceArrayを作成
    const newIngredienceArray = newMealArray02.map((meal) => {
      return meal.ingrediences;
    });
    const array: [] = [];
    const a = array.concat(...newIngredienceArray);
    const ingrearray = a.map((c) => {
      return c.ingre_amount;
    });
    setIngredienceArray(ingrearray);
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

  return (
    <div className="text-xl flex flex-col min-h-screen">
      <Head>
        <title>Shopping list generator</title>
        <meta
          name="description"
          content="Generate your shopping list by choosing recipes!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow mt-8 p-4">
        <MealList mealArray={mealArray} handleMealchoise={handleMealchoise} />
        <TickedMealList TickedMealArray={TickedMealArray} />
        <IngredienceList IngredienceArray={total} />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
