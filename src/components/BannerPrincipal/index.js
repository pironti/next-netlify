import BannerBotoesSimulacoes from "../BannerBotoesSimulacoes";
import SimulacaoItem from "../SimulacaoItem";
import Image from "next/image";
import imgBanner from "../../../public/images/home/bannerPrincipalBg.png"

function BannerPrincipal() {
  return (
    <div className="z-20 relative">
      <div className="max-w-7xl mx-auto z-30">
        <div className="relative sm:overflow-hidden z-50">      
          <div className="banner-principal-bg relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
            <h1 className="font-bold tracking-tight text-5xl sm:text-5xl lg:text-6xl md:ml-16">
              <span className="block text-4xl md:text-5xl text-center md:text-left text-white md:w-1/2 leading-tight mt-32 md:mt-4">
                Simule e compre o seu consórcio online
              </span>
            </h1>
            <p className="mt-6 md:text-left text-center text-xl text-white sm:max-w-2xl md:ml-16 md:w-1/2">
              Carro, casa, moto e mais: selecione o seu bem de interesse e faça
              uma simulação do seu consórcio 100% online agora mesmo!
            </p>
            <h2 className="font-bold tracking-tight text-2xl sm:text-4xl lg:text-4xl mt-2 md:ml-16">
              <span className="block text-center md:text-left text-white">
                Seu sonho em 3,2,1...
              </span>
            </h2>
          </div>
        </div>
        <div className="relative px-4 md:px-16 z-50 -mt-20">
          <BannerBotoesSimulacoes />
        </div>
      </div>
    </div>
  );
}

export default BannerPrincipal;
