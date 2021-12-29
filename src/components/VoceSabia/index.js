import Acordion from "../Acordion";

function VoceSabia() {
  return (
    <div className="relative p-8">
      <div className="relative max-w-7xl mx-auto md:p-0 p-3">
        <h1 className="font-extrabold text-4xl md:text-4xl mt-8 mb-8">
          Você sabia que existem diferentes tipos de consórcio?
        </h1>

        <p className="text-1xl">
          Mas antes de falar sobre os tipos, vamos falar sobre o consórcio.Na
          vida, estamos sempre planejando conquistar algo que parece estar além
          das nossas possibilidades, não é mesmo?A casa própria, o veículo
          novo, um carro para o filho quando ele completar 18 anos ou quando
          passar na faculdade... <br />
          <br />
          No entanto, o cenário brasileiro transmite a impressão de que a cada
          dia fica mais difícil alcançar esses sonhos.
          <br />
          <br />
          Nem tudo está perdido e temos uma dica que pode ser a solução para os
          seus problemas!Se você pensa em adquirir um bem ou Serviço mas não
          tem o dinheiro suficiente para dar a entrada ou para fazer o pagamento
          à vista, então está na hora de você saber mais sobre como funciona o
          Consórcio.<br />
          <br />
          Neste post vamos falar sobre os Tipos De Consórcio mais comuns, como
          escolher a melhor empresa antes de entrar em um consórcio e como
          funcionam as prestações.Continue a leitura e fique por dentro do
          assunto!
        </p>

        <Acordion
          title='O que é um consórcio?'
          text={<p className="text-1xl">
            O consórcio pode ser entendido como uma modalidade de compra para
            adquirir um bem ou um Serviço.Os consórcios chegaram ao Brasil na
            década de 1960 e hoje já estão presentes em outros países.O
            consórcio é uma opção para quem tem como objetivo conquistar um bem
            durável, mas não tem muita pressa em adquirí-lo.
            <br />
            Para que o consórcio funcione, é preciso contar com uma
            administradora autorizada pelo Banco Central.Essa administradora
            formará grupos de pessoas que têm o mesmo interesse, seja em
            adquirir bens móveis, Imóveis ou contratar Serviços Diversos.
            <br />
            Existe uma extensa variedade de tipos de consórcio, sendo mais
            populares os consórcios de Carros, Motos e Imóveis — mas também há
            possibilidades de fazer um consórcio para contratar Serviços, para
            pagar formaturas, viagens, cursos de graduação e pós-graduação, e
            até cirurgias plásticas.
            <br />
            Ou seja, há uma infinidade de oportunidades, basta ter um grupo de
            pessoas interessado.
          </p>}
        />

        <Acordion
          title='Grupos: entenda como funcionam no consórcio'
          text={'Preencher'}
        />

        <Acordion
          title='O papel do BACEN e da administradora de consórcio'
          text={'Preencher'}
        />

        <Acordion
          title='Como funciona a carta de crédito do consórcio'
          text={'Preencher'}
        />

        <Acordion
          title='Quais são os tipos de consórcio'
          text={'Preencher'}
        />

        <Acordion
          title=' Grupos: entenda como funcionam no consórcio'
          text={'Preencher'}
        />

        <Acordion
          title='Por que fazer um consórcio'
          text={'Preencher'}
        />

        <Acordion
          title='Como escolher a melhor administradora de consórcio'
          text={'Preencher'}
        />

      </div>
    </div>
  );
}

export default VoceSabia;
