function BannerPrincipalProduto({ produto }) {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto ">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 ">
            <img
              className="h-full w-full object-cover bg-gradient-to-r from-black"
              src={produto.imagem}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black"
              aria-hidden="true"
            ></div>
          </div>

          <div className="relative px-4 py-8 sm:px-6 sm:py-24 lg:py-32 mt-10">
            <h1 className="font-bold tracking-tight text-5xl sm:text-5xl lg:text-6xl md:ml-12">
              <span className="block text-4xl md:text-5xl text-center md:text-left text-white md:w-1/2 leading-tight mt-32 md:mt-4">
                {produto.nome}
              </span>
            </h1>
            <p className="mt-6 md:text-left text-center text-3xl text-white sm:max-w-2xl md:ml-12 md:w-1/2">
              {produto.descricao}
            </p>

            <div className="mt-2 md:ml-12">
              <div className="mx-auto ">
                <div className="pt-4 flex md:flex-row flex-col md:space-x-4 justify-center md:justify-start">
                  <button
                    type="button"
                    className="text-white mx-auto md:mx-0 mb-2 px-6 py-2 border border-transparent rounded-md shadow-sm banner-simulacao-bg"
                  >
                    Simule Agora
                  </button>

                  <button
                    type="button"
                    className="text-white mx-auto mt-4 md:mt-0 md:mx-0 mb-2 px-6 py-2 border border-white rounded-md shadow-sm "
                  >
                    Vantagens
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerPrincipalProduto;
