import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import type { NextPage } from "next";
import { App } from "src/componets/App";
// アカウント情報用コンポーネント
// import { Account } from "src/componets/Account";

// export async function getStaticProps() {
//   const { data: menuArray, error } = await useSupabaseClient
//     .from("menuArray")
//     .select("*");
//   if (error) {
//     throw new Error(error);
//   }

//   return {
//     props: {
//       menuArray,
//     },
//   };
// }

const Home: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <App />
      )}
    </div>
  );
};

export default Home;
