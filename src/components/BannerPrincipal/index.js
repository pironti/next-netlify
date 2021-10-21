function BannerPrincipal() {
  return (
    <div className="relative ">
      <div className="absolute inset-x-0 bottom-0 h-1/2"></div>
      <div className="max-w-7xl mx-auto ">
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0 ">
            <img
              className="h-full w-full object-cover bg-gradient-to-r from-black"
              src="/images/home/bannerPrincipalBg.png" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black" aria-hidden="true"></div>
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 mt-10" >
            <h1 className="font-bold tracking-tight text-5xl sm:text-5xl lg:text-6xl md:ml-12">
              <span className="block text-4xl md:text-5xl text-center md:text-left text-white md:w-1/2 leading-tight mt-32 md:mt-4">
                Simule e compre o seu consórcio online
              </span>
            </h1>
            <p className="mt-6 md:text-left text-center text-xl text-white sm:max-w-2xl md:ml-12 md:w-1/2">
              Carro, casa, moto e mais: selecione o seu bem de interesse e 
              faça uma simulação do seu consórcio 100% online agora mesmo!
            </p>
            <h2 className="font-bold tracking-tight text-2xl sm:text-4xl lg:text-4xl mt-2 md:ml-12">
              <span className="block text-center md:text-left text-white">
              Seu sonho em 3,2,1...
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerPrincipal;
