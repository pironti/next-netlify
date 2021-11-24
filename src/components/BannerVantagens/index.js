import ContainerBase from "../ContainerBase";
import VantagemBtnItem from "../VantagemBtnItem";

const btnOpcoes = [
  {
    image: "/images/produto/star.svg",
    title: "Planos Exclusivos",
    descr: "Planos a partir de R$80 mil e até 180 meses para pagar.",
  },
  {
    image: "/images/produto/money.svg",
    title: "Saldo Excedente",
    descr: "Use o saldo excedente da sua carta de crédito para pagar as despesas tributárias do seu novo carro.",
  },
  {
    image: "/images/produto/money2.svg",
    title: "Sem Juros",
    descr: "Diferente do financiamento, você não precisa pagar juros ou entrada do seu novo carro.",
  },
  {
    image: "/images/produto/car.svg",
    title: "Seu Usado como Lance",
    descr: "Se preferir, pode usar o seu carro usado como lance para um novo carro no consórcio.",
  },
];

const ajudas = [
  {
    title: "Como funciona a carta de crédito?",
    descr:
      "Quando você recebe a carta de crédito (por sorteio ou por lance), tem à disposição o valor integral para comprar um carro novo ou seminovo. Essa carta só pode ser utilizada, única e exclusivamente, para a aquisição de um carro.",
  },
  {
    title: "Parcelas do consórcio de carros",
    descr:
      "Você pode optar por planos mais curtos, de 36 meses, por exemplo, ou planos mais estendidos, com até 80 meses de duração. A quantidade de parcelas não incide em juros ou valores adicionais.",
  },
];

function Vantagens({titulo}) {
  return (
    <ContainerBase>
      <div className=".nossos-produtos-title mx-auto mt-8 md:pt-8 text-center pr-8 pl-8">
        <p className="font-extrabold text-4xl md:text-4xl ">
          {titulo}
        </p>
      </div>
      
      <div className="md:flex md:flex-row items-center md:space-x-8 p-4 ">
        {btnOpcoes.map((opcao, index) => (
          <VantagemBtnItem key={index} opcao={opcao}></VantagemBtnItem>
        ))}
      </div>
      
      <div className="flex md:flex-row flex-col md:space-x-8 items-center md:m-4">
        
        {ajudas.map((ajuda, index) => (
          
          // eslint-disable-next-line react/jsx-key
          <div className="bg-white w-full h-full flex flex-col md:rounded-3xl shadow-md">
            <div className="mb-4 md:rounded-t-3xl md:h-32 p-8 banner-simulacao-bg text-4xl text-white md:pr-16">
              {ajuda.title}
            </div>
            <div className="text-xl md:h-48 md:text-1xl text-left p-8 text-bold">
                {ajuda.descr}
            </div>
            <div className="mx-auto p-4 text-center">
              <button
                type="button"
                className="text-white mb-2 inline-flex px-7 py-3 border border-transparent rounded-md shadow-sm banner-simulacao-bg"
              >
                Fazer Simulação
              </button>
            </div>
          </div>
        ))}
      </div>
    </ContainerBase>
  );
}

export default Vantagens;
