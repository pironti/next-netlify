import Image from "next/image";
import Link from "next/link";

function SimulacaoItem({ produto }) {
  return (
    <div className="bg-white w-96 flex-col p-8 m-4 rounded-3xl shadow-md">
      <div className="">
        <img className="mx-auto m-4" src={produto.imagem} layout="fill" />
      </div>
      <div className="text-xl md:text-1xl text-center mt-8 mb-4">
        {produto.nome}
      </div>
      <div className="flex">
        <Link href={produto.href}>
          <button
            type="button"
            className="md:mx-auto px-7 mx-auto py-2 border-2 border-red-600 border-transparent rounded-md bg-red-600 text-white shadow-md"
          >
            Simular
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SimulacaoItem;
