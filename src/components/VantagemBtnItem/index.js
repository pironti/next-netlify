
import Image from "next/image"

function MissaoBtnItem({ opcao }) {
  return (
    <div className="bg-white m-8 w-full md:h-96 mx-auto flex flex-col p-8 rounded-3xl shadow-md">
      <div className="mb-8 w-full h-16 mt-4 relative">
        <Image className="mx-auto m-4" src={opcao.image} layout="fill"/>
      </div>
      <div className="text-xl md:text-1xl text-center mb-4"><b>{opcao.title}</b></div>
      <div className="mx-auto pt-4 text-center">
        <p>{opcao.descr}</p>
      </div>
    </div>
  );
}

export default MissaoBtnItem;
