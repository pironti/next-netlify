import ContainerBase from "../ContainerBase";

function QuemSomos() {
  return (
    <ContainerBase>
      <div className="p-8 md:px-0">
        A Embracon é uma das maiores administradoras de consórcio do país,
        segundo ranking do Banco Central. Com cerca de 90 filiais e mais de 600
        parceiros de vendas em todo o Brasil, há mais de 30 anos trabalhamos
        para realizar o seu sonho.
        <div className=".nossos-produtos-title mx-auto md:mb-4 mt-8 text-center pr-8 pl-8 mb-8">
          <p className="font-extrabold text-4xl md:text-4xl md:mb-8">
            Quem somos
          </p>
        </div>
        <div>
          <div className="sr-only md:not-sr-only w-full">
            <img src="/images/embraconWide.png" className="w-full" />
          </div>
          <div className="md:sr-only not-sr-only">
            <img src="/images/embraconWideMobile.png" />
          </div>
        </div>
        <div className="mt-8 mb-4">
          Desde 1988 no mercado, a Embracon se especializou no consórcio de
          automóveis, motocicletas e imóveis, e tornou-se referência no
          atendimento ao cliente. Em sua trajetória, a companhia entregou mais
          de 500 mil bens.Em 2018, ano em que comemorou 30 anos, a companhia
          lançou a categoria de consórcio de serviços, que inclui estudos,
          viagens, festas, decorações e estética.
        </div>
        <div className=" grid gap-5 lg:grid-cols-2 lg:max-w-none">
          <div className="flex flex-col md:p-8 ">
            <img src="/images/embraconA2p.png" className="mx-auto shadow-md" />
          </div>
          <div className="flex flex-col pb-8">
            <p className="md:mt-10">
              A Embracon é uma das maiores administradoras de consórcio do país,
              segundo ranking do Banco Central. Com cerca de 90 filiais e mais
              de 600 parceiros de vendas em todo o Brasil, há mais de 30 anos
              trabalhamos para realizar o seu sonho.
            </p>
            <div></div>
          </div>
        </div>
        <div className="md:mt-8">
          Após algumas aquisições de carteiras, em 1998, a Embracon fortaleceu
          sua presença em território nacional, chegando à região Nordeste, em
          2001, e à região Sul, em 2004, com a inauguração da primeira filial em
          Curitiba (Paraná). <br />
          <br />
          Atualmente, a Embracon conta com cerca de 120 filiais e mais de 600
          parceiros comerciais. <br />
          <br />
          Com aproximadamente 3000 colaboradores, foi premiada por mais de 11
          anos consecutivos no ranking das 100 Melhores Empresas para Trabalhar
          no País pelo Great Place To Work, além de ser destaque em avaliações
          das áreas de gestão de pessoas por publicações respeitadas, como Valor
          Econômico, Revista Época e Revista Você S/A.
        </div>
      </div>
    </ContainerBase>
    
  );
}

export default QuemSomos;
