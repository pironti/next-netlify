function SimulacaoItem({produto}) {
  return (
    <div className="bg-white w-72 flex flex-col p-8 m-4 rounded-3xl shadow-md">
      <div className="">
        <img className="mx-auto m-4" src={produto.imagem} />
      </div>
      <div className="text-xl md:text-2xl text-center mb-4">{produto.nome}</div>
      <div className="mx-auto pt-4">
        <a
          href="#"
          className="p-2 px-4 mt-8 mx-auto border-2 border-red-600 border-transparent rounded-md bg-red-600 text-white shadow-md "
        >
          Simular
        </a>
      </div>
    </div>
  );
}

export default SimulacaoItem;
