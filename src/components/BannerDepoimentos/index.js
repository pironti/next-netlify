import Aspas from "../../../public/images/aspas.svg";
import Elipse from "../../../public/images/elipse.svg";
import Image from "next/image";

function BannerDepoimento() {
  return (
    <div className="relative md:p-16 p-4">
      <div className="relative max-w-7xl mx-auto md:p-0 p-3 flex md:flex-row flex-col ">
        <div className="bg-red-600 md:rounded-l-3xl rounded-t-3xl md:rounded-r-none md:w-1/2 md:p-16 p-8">
          <div className="md:not-sr-only sr-only">
            <Image src={Aspas} />
          </div>
          <h1 className="text-4xl font-bold text-white md:mt-16 mr-8">
            Eu sou cliente Embracon!
          </h1>
          <p className="text-2xl text-white md:mt-16 mt-8 md:mb-24">
            Veja o que os nossos clientes estão falando sobre a experiência de
            contar com a Embracon.
          </p>
        </div>

        <div className="bg-white md:rounded-r-3xl md:rounded-l-none rounded-b-3xl md:w-1/2 md:p-16 p-8">
          <div className="flex space-x-4 items-center">
            <Image src={Elipse} />
            <h1 className="text-2xl font-extrabold">José Roberto</h1>
          </div>
          <p className="mt-8 md:mt-16 md:italic text-2x1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat
            ante, dignissim vel nisi in, vestibulum pellentesque diam.
            Suspendisse suscipit vehicula tortor, ut finibus nisl mattis in.
            Donec a tortor a risus posuere ornare eu vel quam. Suspendisse
            congue purus in tristique porttitor. Suspendisse nunc enim, interdum
            sed est ornare, molestie interdum purus. Morbi sem eros, dapibus sed
            augue nec, eleifend semper erat.
          </p>
          <div className="flex">
            <button
              type="button"
              className="px-7 py-3 mx-auto md:mx-0 border-2 self-auto border-red-600 rounded-md bg-white text-red-600 shadow-md mt-8 md:mt-16 md:mr-4"
            >
              Assista ao Depoimento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerDepoimento;
