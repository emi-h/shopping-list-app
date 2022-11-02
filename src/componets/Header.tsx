import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 p-4">
        <h1 className="text-xl">Shopping list generator :)</h1>
        <nav>
          <ul className="flex justify-center align-center h-full">
            <li>
              <Link href="/">
                <a className="border p-4 inline-block">メニュー選択</a>
              </Link>
            </li>
            <li>
              <Link href="add">
                <a className="border p-4 inline-block">メニュー追加</a>
              </Link>
            </li>
            <li>
              <Link href="account">
                <a className="border p-4 inline-block">アカウント情報変更</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
