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
  nome : "Consórcio de Imóveis",
  descricao : "Compre um imóvel novo, uma sala comercial ou reforme sua casa",
  imagem : "/images/produto/bannerProduto.png"
}

function Produto() {

  const titulo = "Conheça as vantagens do " + produto.nome + " Embracon"

  return (
    <>
      <Template>
        <BannerPrincipalProduto produto={produto}/> 
        <BannerConhecaConsorcio produto={produto}/>
        <BannerSimulacao />
        <Vantagens titulo={titulo} />

        <NossosProdutos titulo={titulo} />

      </Template>
    </>
  );
}

export default Produto;
