import NossosProdutosItem from "../NossosProdutosItem";

const nossosProdutos = [
  {
    nome: "Consórcio de Automóveis",
    desc: "Realize seu sonho com o Consórcio de Automóveis Embracon.",
    imge: "/images/home/nossosProdutosCarros.png",
  },
  {
    nome: "Consórcio de Imóveis",
    desc: "Realize seu sonho com o Consórcio de Imóveis Embracon.",
    imge: "/images/home/nossosProdutosImoveis.png",
  },
  {
    nome: "Consórcio de Motocicletas",
    desc: "Realize seu sonho com o Consórcio de Motocicletas Embracon.",
    imge: "/images/home/nossosProdutosMotos.png",
  },
  {
    nome: "Consórcio de Serviços",
    desc: "Realize seu sonho com o Consórcio de Serviços Embracon.",
    imge: "/images/home/nossosProdutosServicos.png",
  },
  {
    nome: "Consórcio de Veículos Pesados",
    desc: "Realize seu sonho com o Consórcio de Veículos Pesados Embracon.",
    imge: "/images/home/nossosProdutosCaminhoes.png",
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
