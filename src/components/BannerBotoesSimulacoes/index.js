import ContainerBase from "../../components/ContainerBase";
import SimulacaoItem from "../../components/SimulacaoItem"

const produtos = [
  {
    nome: "Consórcio de Imóveis",
    imagem: "/images/icoHome.svg",
  },
  {
    nome: "Consórcio de Veículos",
    imagem: "/images/icoCarro.svg",
  },
  {
    nome: "Consórcio de Pesados",
    imagem: "/images/icoCaminhao.svg",
  },
  {
    nome: "Consórcio de Motos",
    imagem: "/images/icoMoto.svg",
  },
  {
    nome: "Consórcio de Serviços",
    imagem: "/images/icoAviao.svg",
  }
];

function BannerBotoesSimulacoes() {
  return (
    <ContainerBase>

      <div className="flex flex-row items-center pt-12">
        
        {produtos.map((produto, index) => (
          <SimulacaoItem key={index} produto={produto}></SimulacaoItem>
        ))}

      </div>
    </ContainerBase>
  );
}

export default BannerBotoesSimulacoes;
