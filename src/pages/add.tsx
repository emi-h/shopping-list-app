// import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { NextPage } from "next";
import { ComponentProps } from "react";
import { Header } from "src/componets/Header";
import { supabase } from "src/lib/supabaseClient";

const AddPage: NextPage = () => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();
    const name = e.currentTarget.menu.value;
    const ingre1 = e.currentTarget.ingre1.value;
    const ingre2 = e.currentTarget.ingre2.value;
    const ingre3 = e.currentTarget.ingre3.value;
    const ingre4 = e.currentTarget.ingre4.value;
    const ingre5 = e.currentTarget.ingre5.value;

    const ingreNum1 = e.currentTarget.ingreNum1.value;
    const ingreNum2 = e.currentTarget.ingreNum2.value;
    const ingreNum3 = e.currentTarget.ingreNum3.value;
    const ingreNum4 = e.currentTarget.ingreNum4.value;
    const ingreNum5 = e.currentTarget.ingreNum5.value;

    // console.log("ingreNum1", ingreNum1);
    // console.log("name", name);

    await supabase.from("menus").insert([{ name: name }, { checked: false }]);
    await supabase
      .from("ingrediences")
      .insert([{ name: name }, { ingredience: ingre1 }, { amount: ingreNum1 }]);

    return;
  };

  return (
    <>
      <Header />
      <div className="p-4 mt-8">
        <p className="mb-8">メニューを追加しましょう</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>
              メニュー名（必須）：
              <input
                type="text"
                placeholder="メニュー名"
                name="menu"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              材料1（必須）：
              <input
                type="text"
                placeholder="材料"
                name="ingre1"
                required
                className="mr-4"
              />
              <input
                type="number"
                placeholder="数量"
                name="ingreNum1"
                required
                className="inline-block"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              材料2：
              <input
                type="text"
                placeholder="材料"
                name="ingre2"
                className="mr-4"
              />
              <input type="number" placeholder="数量" name="ingreNum2" />
            </label>
          </div>
          <div className="mb-4">
            <label>
              材料3：
              <input
                type="text"
                placeholder="材料"
                name="ingre3"
                className="mr-4"
              />
              <input type="number" placeholder="数量" name="ingreNum3" />
            </label>
          </div>
          <div className="mb-4">
            <label>
              材料4：
              <input
                type="text"
                placeholder="材料"
                name="ingre4"
                className="mr-4"
              />
              <input type="number" placeholder="数量" name="ingreNum4" />
            </label>
          </div>
          <div className="mb-4">
            <label>
              材料5：
              <input
                type="text"
                placeholder="材料"
                name="ingre5"
                className="mr-4"
              />
              <input type="number" placeholder="数量" name="ingreNum5" />
            </label>
          </div>
          <button className="border p-4 mt-8 inline-block">追加</button>
        </form>
      </div>
    </>
  );
};

export default AddPage;
