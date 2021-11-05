import BannerSimulacao from "../../components/BannerSimulacao";
import NossosProdutos from "../../components/NossosProdutos";
import NossaSede from "../../components/NossaSede";
import Template from "../../components/Template";
import BannerParceiros from "../../components/BannerParceiros";
import VoceSabia from "../../components/VoceSabia";
import BannerConhecaConsorcio from "../../components/BannerConhecaConsorcio";
import BannerPrincipalProduto from "../../components/BannerPrincipalProduto";
import Vantagens from "../../components/BannerVantagens";
import HeaderSimples from "../../components/HeaderSimples";
import QuemSomos from "../../components/QuemSomos";
import QuemSomosMissao from "../../components/QuemSomosMissao";

const produto = {
  nome : "Consórcio de Carro",
  descricao : "Simule o seu Consórcio de Carros Online",
  imagem : "/images/produto/bannerProduto.png"
}

const header = {
  imagem : "/images/AEmbracon.png",
  titulo: "A Embracon",
  subtitulo: "A História"
}

function Produto() {
  return (
    <>
      <Template>
        <HeaderSimples header={header}/> 
        <QuemSomos />
        <BannerParceiros />
        <QuemSomosMissao />
      </Template>
    </>
  );
}

export default Produto;
