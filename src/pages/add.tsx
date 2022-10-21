import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { NextPage } from "next";
import { ComponentProps } from "react";
import { Nav } from "src/componets/Nav";

const AddPage: NextPage = () => {
  const supabase = useSupabaseClient();
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

    const ingreJson = {
      ingredience: {
        [ingre1]: Number(ingreNum1),
        [ingre2]: Number(ingreNum2),
        [ingre3]: Number(ingreNum3),
        [ingre4]: Number(ingreNum4),
        [ingre5]: Number(ingreNum5),
      },
    };
    // console.log(ingreJson);

    await supabase.from("menuArray").insert([
      {
        name: name,
        checked: false,
        ingredienceJson: ingreJson,
      },
    ]);
    return;
  };

  return (
    <>
      <Nav />
      <p className="mt-8 mb-8">メニューを追加しましょう</p>

      <div>
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
