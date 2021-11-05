function HeaderSimples({ header }) {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto ">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 ">
            <img
              className="h-full w-full object-cover bg-gradient-to-r from-black"
              src={header.imagem}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black"
              aria-hidden="true"
            ></div>
          </div>

          <div className="relative px-4 py-8 sm:px-6 ">
            <h1 className="font-bold tracking-tight text-5xl sm:text-5xl lg:text-6xl md:ml-12">
              <span className="block text-4xl md:text-4xl text-center md:text-left text-white md:w-1/2 leading-tight mt-32 md:mt-4">
                {header.titulo}
              </span>
            </h1>
            <p className="mt-6 md:text-left text-center text-2xl text-white sm:max-w-2xl md:ml-12 md:w-1/2">
              {header.subtitulo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSimples;
