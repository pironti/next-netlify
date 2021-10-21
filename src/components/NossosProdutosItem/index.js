function NossosProdutosItem({produto}) {
  return (
    <div className="p-2 pr-8 pl-8 ">
      <div className="relative bg-white max-w-7xl rounded-lg mx-auto md:p-0 p-3">
        <div className="h-56 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2 rounded-lg">
          <img
            className="w-full h-full object-cover rounded-r-lg invisible md:visible"
            src={produto.imge}
            alt=""
          />
        </div>

        <div className="relative mx-auto pt-16 md:py-12">
          <div className=" md:pl-10 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left -mt-64 md:m-0">
              {produto.nome}
            </h1>
            <p className="text-2xl md:mt-4 text-center mr-4 ml-4 md:ml-0 md:text-left mt-8">
              {produto.desc}
            </p>
            <div className="mx-auto md:mx-auto md:px-0 px-3 text-center md:text-left md:mt-0 mt-4 md:md-0 mb-4">
              <button
                type="button"
                className="font-semibold px-7 py-3 border-2 border-red-600 rounded-md shadow-sm bg-white text-red-600 shadow-md md:mt-6 md:mr-4"
              >
                Conheça mais
              </button>
              &nbsp;
              <button
                type="button"
                className="font-semibold md:mx-auto px-7 mx-auto py-3 border-2 border-red-600 border-transparent rounded-md shadow-sm bg-red-600 text-white shadow-md mt-6"
              >
                Faça uma simulação
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NossosProdutosItem;
