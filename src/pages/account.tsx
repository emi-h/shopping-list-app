import { useSession } from "@supabase/auth-helpers-react";
import { NextPage } from "next";
import { Account } from "src/componets/Account";
import { Header } from "src/componets/Header";

const AccountPage: NextPage = () => {
  const session = useSession();

  return (
    <>
      <Header />
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? null : <Account session={session} />}
      </div>
    </>
  );
};

export default AccountPage;
