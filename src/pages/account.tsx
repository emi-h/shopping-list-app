import { useSession } from "@supabase/auth-helpers-react";
import { NextPage } from "next";
import Link from "next/link";
import { Account } from "src/componets/Account";
import { Nav } from "src/componets/Nav";

const AccountPage: NextPage = () => {
  const session = useSession();

  return (
    <>
      <Nav />
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? null : <Account session={session} />}
      </div>
    </>
  );
};

export default AccountPage;
