import ContainerBase from "../ContainerBase";
import MissaoBtnItem from "../VantagemBtnItem";
import VantagemBtnItem from "../VantagemBtnItem";

const opcao = [
  {
    image: "/images/balanca.svg",
    title: "Ser Íntegro",
    descr:
      "A nossa base é a integridade e o respeito! São eles que sustentam a relação de confiança, ética e transparência que cultivamos com todas as pessoas.",
  },
  {
    image: "/images/star.svg",
    title: "Ser Simples",
    descr:
      "Acreditamos no poder da simplicidade! Ela conecta e transforma desafios em oportunidades, impulsionando o crescimento do jeito que queremos: sempre juntos!",
  },
  {
    image: "/images/hand.svg",
    title: "Construir Juntos",
    descr:
      "Fazer juntos é o melhor jeito para evoluir! É quebrar qualquer tipo de barreira e cultivar a cooperação e o genuíno espírito de equipe.",
  },
  {
    image: "/images/idea.svg",
    title: "Inovar Sempre",
    descr:
      "Inovar é atitude de protagonista! É provocar novas formas de fazer independentemente da sua área.",
  },
];

function QuemSomosMissao() {
  return (
    <ContainerBase>
      <div className="p-8 md:px-0">
        <div className=".nossos-produtos-title mx-auto md:mb-4 mt-8 text-center pr-8 pl-8 mb-8">
          <p className="font-extrabold text-4xl md:text-4xl md:mb-8">Missão</p>
        </div>
        <div className="mt-8 mb-4">
          A Embracon assume a missão de gerar encantamento de forma consciente,
          a partir de ações e resultados que permitam materializar sonhos,
          oferecer as melhores soluções e alavancar prosperidade.
        </div>
        <div className=".nossos-produtos-title mx-auto md:mb-4 mt-8 text-center pr-8 pl-8 mb-8">
          <p className="font-extrabold text-4xl md:text-4xl md:mb-8">Valores</p>
        </div>
        <div className="mt-8 mb-4">
          No ano de 2020, como parte do projeto Elevação Cultural Embracon,
          sentimos a necessidade de reestruturar nossos valores para que
          expressassem da melhor maneira possível nossa história e nossa
          evolução, sem perder a nossa essência. <br />
          <br />
          Rever conceitos que fazem parte da nossa trajetória há mais de três
          décadas exige coragem. Coragem para entender que o mundo mudou, que
          nós mudamos também e que essa mudança faz parte de um processo de
          crescimento.
          <br />
          <br />
          Hoje, o Consórcio Embracon é muito mais do que uma administradora de
          consórcios, é a união de diferentes pessoas que trabalham todos os
          dias com o propósito de contribuir com a realização de sonhos de
          milhares de brasileiros. E, por isso, nossos valores foram repaginados
          para que sejam norteadores de todos os nossos relacionamentos,
          processos e soluções.
        </div>
        <div className="md:flex md:flex-row items-center md:space-x-8 ">
          {opcao.map((opcao, index) => (
            <MissaoBtnItem key={index} opcao={opcao}></MissaoBtnItem>
          ))}
        </div>
      </div>
      <div className=".nossos-produtos-title mx-auto md:mb-4 text-center pr-8 pl-8 mb-8">
        <p className="font-extrabold text-4xl md:text-4xl md:mb-8">
          Responsabilidade Social
        </p>
      </div>
      <div className="mt-8 mb-4 px-8">
        Baseada no compromisso com clientes, fornecedores e colaboradores, a
        Embracon mantém diversos programas de responsabilidade social para
        contribuir com uma sociedade mais justa. Confira:
      </div>
      <div className=" grid gap-5 lg:grid-cols-2 lg:max-w-none px-8">
        <div className="flex flex-col md:p-8 ">
          <img src="/images/abrace.png" className="mx-auto shadow-md" />
        </div>
        <div className="flex flex-col pb-8">
          <p className="md:mt-10 md:pt-16 md:pr-16 ">
            O Programa Social Abrace uma Vida foi desenvolvido pela Embracon e
            tem como objetivo patrocinar projetos que contribuem com o
            desenvolvimento social. A cada cota vendida, R$ 1 é direcionado para
            o patrocínio de um projeto. O patrocínio ocorre anualmente, com a
            arrecadação do último ano.
          </p>
          <div></div>
        </div>
      </div>
    </ContainerBase>
  );
}

export default QuemSomosMissao;
