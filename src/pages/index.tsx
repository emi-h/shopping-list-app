import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Footer } from "src/componets/Footer";
import { Header } from "src/componets/Header";
import { IngredienceList } from "src/componets/IngredienceList";
import { MealList } from "src/componets/MealList/MealList";
import { TickedMealList } from "src/componets/TickedMealList";
import { IngredienceType } from "src/type/IndredienceType";
import { MealDataType } from "src/type/MealDataType";

import { supabase } from "./lib/supabaseClient";

type Props = {
  errors?: string;
  list: MealDataType[];
};

const Home: NextPage<Props> = ({ errors, list }) => {
  const [mealArray, setMealArray] = useState<MealDataType[]>(list);
  const [TickedMealArray, setTickedMealArray] = useState<MealDataType[]>([]);
  const [IngredienceArray, setIngredienceArray] = useState<IngredienceType[]>(
    []
  );

  const handleMealchoise = (id: number) => {
    // クリックしたメニューのidを反転して新しい配列を作成
    const newMealArray = mealArray.map((mealArray) => {
      if (mealArray.id === id) {
        mealArray.checked = !mealArray.checked;
      }
      return mealArray;
    });
    setMealArray(newMealArray);

    const trueMealArray = mealArray
      //チェックされたものだけ取り出して配列作成
      .filter((meal) => meal.checked);
    setTickedMealArray(trueMealArray);

    const ingredienceArray = trueMealArray
      // チェックしたメニューの材料の配列を作成
      .flatMap((meal) => {
        return meal.ingrediences;
      });

    // 同じ材料を計算して配列を作成
    // [FIX ME]:Type
    const totalIngredienceObj = ingredienceArray.reduce((prev, current) => {
      return {
        ...prev,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [current.ingredience]: prev[current.ingredience as any]
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ? Number(prev[current.ingredience as any]) + Number(current.amount)
          : current.amount,
      };
    }, {} as IngredienceType);

    const totalIngredienceArray = Object.entries(totalIngredienceObj).map(
      function ([key, value]) {
        return [key, value];
      }
    );
    setIngredienceArray(totalIngredienceArray);
  };

  if (errors) return <div>Error...</div>;
  if (!list?.length) return <div>missing data...</div>;

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
        <IngredienceList IngredienceArray={IngredienceArray} />
      </main>
      <Footer />
    </div>
  );
};
export default Home;

// get data from supabase
export const getServerSideProps: GetServerSideProps = async () => {
  const { data, error } = await supabase
    .from("menus")
    .select("id,name,checked,ingrediences(ingredience,amount)");

  return {
    props: {
      errors: error,
      list: data,
    },
  };
};
