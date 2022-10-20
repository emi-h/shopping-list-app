import { useSession } from "@supabase/auth-helpers-react";
import { NextPage } from "next";
import Link from "next/link";
import { Account } from "src/componets/Account";

const AccountPage: NextPage = () => {
  const session = useSession();

  return (
    <>
      <nav>
        <li>
          <Link href="/">
            <a>メニュー選択</a>
          </Link>
        </li>
      </nav>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? null : <Account session={session} />}
      </div>
    </>
  );
};

export default AccountPage;
