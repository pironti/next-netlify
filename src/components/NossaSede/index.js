import Image from "next/image";
import imgBanner from "../../../public/images/home/nossaSede.png"

function  NossaSede() {
  return (
    <div className="">

      <div className="max-w-7xl mx-auto">

        <div className=" grid gap-5 lg:grid-cols-2 lg:max-w-none">
          <div className="flex flex-col p-8 md:p-16">
            <Image src={imgBanner} className="mx-auto shadow-md"/>
          </div>
          <div className="flex flex-col pr-8 pl-8 pb-8 md:p-16">
            <p className="text-3xl font-black text-gray-900 sm:text-4xl">
              Consórcio Embracon Matriz
            </p>
            <p className="text-xl text-gray-500 mt-10">
              A Embracon é uma das maiores administradoras de consórcio do país,
              segundo ranking do Banco Central. Com cerca de 90 filiais e mais
              de 600 parceiros de vendas em todo o Brasil, há mais de 30 anos
              trabalhamos para realizar o seu sonho.
            </p>
                <div>
                <button
              type="button"
              className="font-normal px-7 py-3 border border-transparent rounded-md bg-red-600 text-white shadow-md mt-6"
            >
              Veja como chegar
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NossaSede;
