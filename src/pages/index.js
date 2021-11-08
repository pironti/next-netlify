import BannerSimulacao from "../components/BannerSimulacao";
import NossosProdutos from "../components/NossosProdutos";
import NossaSede from "../components/NossaSede";
import Template from "../components/Template";
import BannerPrincipal from "../components/BannerPrincipal";
import BannerParceiros from "../components/BannerParceiros";
import VoceSabia from "../components/VoceSabia";
import BannerDepoimento from "../components/BannerDepoimentos";
import BannerBotoesSimulacoes from "../components/BannerBotoesSimulacoes"

//<<BannerBotoesSimulacoes /> />
function Home() {
  return (
    <>
      <Template>
        <BannerPrincipal /> 
        
        <NossaSede />
        <BannerSimulacao />
        <NossosProdutos titulo="Conheça nossos produtos"/>
        <BannerParceiros />
        <VoceSabia />
      </Template>
    </>
  );
}

export default Home;