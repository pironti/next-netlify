import NossosProdutosItem from "../NossosProdutosItem";

const nossosProdutos = [
  {
    nome: "Consórcio de Automóveis",
    desc: "Realize seu sonho com o Consórcio de Automóveis Embracon.",
    imge: "/images/home/nossosProdutosCarros.png",
    href: "/consorcio-de-carros",
    simu: "https://simulador.embracon.com.br/simulacao?interest=auto"
  },
  {
    nome: "Consórcio de Imóveis",
    desc: "Realize seu sonho com o Consórcio de Imóveis Embracon.",
    imge: "/images/home/nossosProdutosImoveis.png",
    href: "/consorcio-de-imoveis",
    simu: "https://simulador.embracon.com.br/simulacao?interest=imovel"
  },
  {
    nome: "Consórcio de Motocicletas",
    desc: "Realize seu sonho com o Consórcio de Motocicletas Embracon.",
    imge: "/images/home/nossosProdutosMotos.png",
    href: "/consorcio-motos",
    simu: "https://simulador.embracon.com.br/simulacao?interest=moto"
  },
  {
    nome: "Consórcio de Serviços",
    desc: "Realize seu sonho com o Consórcio de Serviços Embracon.",
    imge: "/images/home/nossosProdutosServicos.png",
    href: "/consorcio-servicos",
    simu: "https://simulador.embracon.com.br/simulacao?interest=https://simulador.embracon.com.br/simulacao?interest=servico"
  },
  {
    nome: "Consórcio de Veículos Pesados",
    desc: "Realize seu sonho com o Consórcio de Veículos Pesados Embracon.",
    imge: "/images/home/nossosProdutosCaminhoes.png",
    href: "/consorcio-de-veiculos-pesados",
    simu: "https://simulador.embracon.com.br/simulacao?interest=pesado"
  }
];

function NossosProdutos({titulo}) {
  
  return (
    <>
      <div className=".nossos-produtos-title mx-auto md:mb-4 mt-8 md:pt-8 text-center pr-8 pl-8">
        <p className="font-extrabold text-4xl md:text-4xl ">
          {titulo}
        </p>
      </div>
      {nossosProdutos.map((produto, index) => (
        <NossosProdutosItem key={index} produto={produto}></NossosProdutosItem>
      ))}
      
    </>
  );
}

export default NossosProdutos;

