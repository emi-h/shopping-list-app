import Link from "next/link";
import { FC } from "react";

export const Nav: FC = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center align-center h-full">
        <li>
          <Link href="/">
            <a className="border pl-4 inline-block">メニュー選択</a>
          </Link>
        </li>
        <li>
          <Link href="add">
            <a className="border pl-4 inline-block">メニュー追加</a>
          </Link>
        </li>
        <li>
          <Link href="account">
            <a className="border pl-4 inline-block">アカウント情報変更</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
