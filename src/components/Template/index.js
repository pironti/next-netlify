/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import MenuPrincipal from "../MenuPrincipal";
import Rodape from "../Rodape";

function Template({ children }) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <title>Embracon</title>
      </Head>

      <body>
        <MenuPrincipal />
        {children}
        <Rodape />
      </body>
    </div>
  );
}

export default Template;
