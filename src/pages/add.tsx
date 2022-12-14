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
    const ingre6 = e.currentTarget.ingre5.value;
    const ingre7 = e.currentTarget.ingre5.value;
    const ingre8 = e.currentTarget.ingre5.value;
    const ingre9 = e.currentTarget.ingre5.value;
    const ingre10 = e.currentTarget.ingre5.value;

    const ingreNum1 = e.currentTarget.ingreNum1.value;
    const ingreNum2 = e.currentTarget.ingreNum2.value;
    const ingreNum3 = e.currentTarget.ingreNum3.value;
    const ingreNum4 = e.currentTarget.ingreNum4.value;
    const ingreNum5 = e.currentTarget.ingreNum5.value;
    const ingreNum6 = e.currentTarget.ingreNum5.value;
    const ingreNum7 = e.currentTarget.ingreNum5.value;
    const ingreNum8 = e.currentTarget.ingreNum5.value;
    const ingreNum9 = e.currentTarget.ingreNum5.value;
    const ingreNum10 = e.currentTarget.ingreNum5.value;

    await supabase.from("menus").insert([{ name: name, checked: false }]);

    await supabase.from("ingrediences").insert([
      {
        amount: ingreNum1,
        ingredience: ingre1,
        menuName: name,
      },
      {
        amount: ingreNum2,
        ingredience: ingre2,
        menuName: name,
      },
      {
        amount: ingreNum3,
        ingredience: ingre3,
        menuName: name,
      },
      {
        amount: ingreNum4,
        ingredience: ingre4,
        menuName: name,
      },
      {
        amount: ingreNum5,
        ingredience: ingre5,
        menuName: name,
      },
      {
        amount: ingreNum6,
        ingredience: ingre6,
        menuName: name,
      },
      {
        amount: ingreNum7,
        ingredience: ingre7,
        menuName: name,
      },
      {
        amount: ingreNum8,
        ingredience: ingre8,
        menuName: name,
      },
      {
        amount: ingreNum9,
        ingredience: ingre9,
        menuName: name,
      },
      {
        amount: ingreNum10,
        ingredience: ingre10,
        menuName: name,
      },
    ]);

    return;
  };

  return (
    <>
      <Header />
      <div className="p-4 mt-8">
        <p className="mb-8">????????????????????????????????????</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>
              ??????????????????
              <input
                type="text"
                placeholder="???????????????"
                className="p-2 border-2 border-rose-500"
                name="menu"
                required
              />
            </label>
            <span className="text-orange-700 ml-2 inline-block">??????</span>
          </div>
          <div className="mb-4">
            <label>
              ??????1???
              <input
                type="text"
                placeholder="??????"
                name="ingre1"
                required
                className="mr-4 p-2 border-2 border-rose-500"
              />
              <input
                type="number"
                placeholder="??????"
                name="ingreNum1"
                required
                className="p-2 border-2 border-rose-500"
                step="0.01"
              />
            </label>
            <span className="text-orange-700 ml-2 inline-block">??????</span>
          </div>
          <div className="mb-4">
            <label>
              ??????2???
              <input
                type="text"
                placeholder="??????"
                name="ingre2"
                className="mr-4 p-2"
                step="0.01"
              />
              <input
                type="number"
                placeholder="??????"
                className="p-2"
                name="ingreNum2"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              ??????3???
              <input
                type="text"
                placeholder="??????"
                name="ingre3"
                className="mr-4 p-2"
                step="0.01"
              />
              <input
                type="number"
                placeholder="??????"
                className="p-2"
                name="ingreNum3"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              ??????4???
              <input
                type="text"
                placeholder="??????"
                name="ingre4"
                className="mr-4 p-2"
                step="0.01"
              />
              <input
                type="number"
                placeholder="??????"
                className="p-2"
                name="ingreNum4"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              ??????5???
              <input
                type="text"
                placeholder="??????"
                name="ingre5"
                className="mr-4 p-2"
                step="0.01"
              />
              <input
                type="number"
                placeholder="??????"
                className="p-2"
                name="ingreNum5"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              ??????6???
              <input
                type="text"
                placeholder="??????"
                name="ingre6"
                className="mr-4 p-2"
                step="0.01"
              />
              <input
                type="number"
                placeholder="??????"
                className="p-2"
                name="ingreNum6"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              ??????7???
              <input
                type="text"
                placeholder="??????"
                name="ingre7"
                className="mr-4 p-2"
                step="0.01"
              />
              <input
                type="number"
                placeholder="??????"
                className="p-2"
                name="ingreNum7"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              ??????8???
              <input
                type="text"
                placeholder="??????"
                name="ingre8"
                className="mr-4 p-2"
                step="0.01"
              />
              <input
                type="number"
                placeholder="??????"
                className="p-2"
                name="ingreNum8"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              ??????9???
              <input
                type="text"
                placeholder="??????"
                name="ingre9"
                className="mr-4 p-2"
                step="0.01"
              />
              <input
                type="number"
                placeholder="??????"
                className="p-2"
                name="ingreNum9"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              ??????10???
              <input
                type="text"
                placeholder="??????"
                name="ingre10"
                className="mr-4 p-2"
                step="0.01"
              />
              <input
                type="number"
                placeholder="??????"
                className="p-2"
                name="ingreNum10"
              />
            </label>
          </div>
          <button className="border p-4 mt-8 inline-block">??????</button>
        </form>
      </div>
    </>
  );
};

export default AddPage;
