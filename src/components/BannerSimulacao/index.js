import Link from "next/link";

function BannerSimulacao() {
  return (
    <div className="banner-simulacao-bg">
      <div className=" mx-auto p-8">
        <div className="text-center">
          <p className="banner-simulacao-h1 font-semibold">
            Faça uma simulação agora e conquiste seu sonho!
          </p>
          <p className="banner-simulacao-h2 font-normal m-6">
            Com o Consórcio Embracon você realiza o seu sonho sem pagar juros.
          </p>
          <a href="https://simulador.embracon.com.br/simulacao">
            <button
              type="button"
              className="banner-simulacao-button mb-2 inline-flex font-semibold px-7 py-3 border border-transparent rounded-md shadow-sm bg-white"
            >
              Fazer Simulação
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BannerSimulacao;
