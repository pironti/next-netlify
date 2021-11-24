import ContainerBase from "../../components/ContainerBase";
import SimulacaoItem from "../../components/SimulacaoItem"

const produtos = [
  {
    nome: "Consórcio de Imóveis",
    imagem: "/images/icoHome.svg",
    href: "/consorcio-de-imoveis"
  },
  {
    nome: "Consórcio de Veículos",
    imagem: "/images/icoCarro.svg",
    href: "/consorcio-de-carros"
  },
  {
    nome: "Consórcio de Pesados",
    imagem: "/images/icoCaminhao.svg",
    href: "/consorcio-de-veiculos-pesados"
  },
  {
    nome: "Consórcio de Motos",
    imagem: "/images/icoMoto.svg",
    href: "/consorcio-motos"
  },
  {
    nome: "Consórcio de Serviços",
    imagem: "/images/icoAviao.svg",
    href: "/consorcio-servicos"
  }
];

function BannerBotoesSimulacoes() {
  return (
    <ContainerBase>
      <div className="flex flex-row items-center pt-4 overflow-x-auto z-40">
        
        {
          produtos.map((produto, index) => (
            <SimulacaoItem key={index} produto={produto}></SimulacaoItem>
          ))
        }

      </div>
    </ContainerBase>
  );
}

export default BannerBotoesSimulacoes;
