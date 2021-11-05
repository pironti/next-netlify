function MissaoBtnItem({ opcao }) {
  return (
    <div className="bg-white m-8 w-full md:h-96 mx-auto flex flex-col p-8 rounded-3xl shadow-md">
      <div className="mb-4">
        <img className="mx-auto m-4" src={opcao.image} />
      </div>
      <div className="text-xl md:text-1xl text-center mb-4"><b>{opcao.title}</b></div>
      <div className="mx-auto pt-4 text-center">
        <p>{opcao.descr}</p>
      </div>
    </div>
  );
}

export default MissaoBtnItem;
