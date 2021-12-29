/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import MenuPrincipal from "../MenuPrincipal";
import Rodape from "../Rodape";

function Template({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <title>Embracon</title>
      </Head>


      <MenuPrincipal />
      <main>{children}</main>
      <Rodape />

    </>
  );
}

export default Template;
