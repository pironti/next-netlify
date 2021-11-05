import BannerSimulacao from "../../components/BannerSimulacao";
import NossosProdutos from "../../components/NossosProdutos";
import NossaSede from "../../components/NossaSede";
import Template from "../../components/Template";
import BannerParceiros from "../../components/BannerParceiros";
import VoceSabia from "../../components/VoceSabia";
import BannerConhecaConsorcio from "../../components/BannerConhecaConsorcio";
import BannerPrincipalProduto from "../../components/BannerPrincipalProduto";
import Vantagens from "../../components/BannerVantagens";

const produto = {
  nome : "Consórcio de Carro",
  descricao : "Simule o seu Consórcio de Carros Online",
  imagem : "/images/produto/bannerProduto.png"
}

function Produto() {
  return (
    <>
      <Template>
        <BannerPrincipalProduto produto={produto}/> 
        <BannerConhecaConsorcio/>
        <BannerSimulacao />
        <Vantagens />

        <NossosProdutos titulo="Conheça as vantagens do Consórcio de Carros Embracon" />

      </Template>
    </>
  );
}

export default Produto;
