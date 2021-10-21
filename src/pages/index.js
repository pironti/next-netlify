import BannerSimulacao from "../components/BannerSimulacao";
import NossosProdutos from "../components/NossosProdutos";
import NossaSede from "../components/NossaSede";
import Template from "../components/Template";
import BannerPrincipal from "../components/BannerPrincipal";
import BannerParceiros from "../components/BannerParceiros";
import VoceSabia from "../components/VoceSabia";
import BannerDepoimento from "../components/BannerDepoimentos";

function Home() {
  return (
    <>
      <Template>
        <BannerPrincipal />
        <NossaSede />
        <BannerSimulacao />
        <BannerDepoimento />
        <NossosProdutos />
        <BannerParceiros />
        <VoceSabia />
      </Template>
    </>
  );
}

export default Home;