import { Button, CopyButton } from "@mantine/core";
import { FC } from "react";
import { IngredienceType } from "src/type/IndredienceType";

export const IngredienceList: FC<IngredienceType> = ({ total }) => {
  // console.log("total", total);
  const copyText = JSON.stringify(total);
  //   console.log("copyText", copyText);

  // [FIX ME]データが空の時の表示
  // if (!total) {
  //   return <p>なし</p>;
  // }

  return (
    <div className="pt-8 pb-8">
      <h2 className="font-bold text-2xl my-4">
        3.Ingredience list：Generated the ingredience list from your meal.
      </h2>
      {/* Object.keys(total)でkeyの配列を作成 */}
      {Object.keys(total).map((i) => {
        return (
          <>
            <div key={i}>
              {/* [FIX ME]型 'string' の式を使用して型 'Number' にインデックスを付けることはできないため、要素は暗黙的に 'any' 型になります。
  型 'string' のパラメーターを持つインデックス シグネチャが型 'Number' に見つかりませんでした。ts(7053) */}
              {/* <span>{i}</span>: <span>{total[i]}</span> */}
            </div>
          </>
        );
      })}
      <CopyButton value={copyText}>
        {({ copied, copy }) => (
          <Button color={copied ? "teal" : "blue"} onClick={copy}>
            {copied ? "Copied text" : "Copy text 実装中"}
          </Button>
        )}
      </CopyButton>
    </div>
  );
};
