import ContainerBase from "../../components/ContainerBase";

const parceiros = [
  {
    logo: "/images/parceiros/Renault.svg",
  },
  {
    logo: "/images/parceiros/Nissan.svg",
  },
  {
    logo: "/images/parceiros/Banese.svg",
  },
  {
    logo: "/images/parceiros/Stara.svg",
  },
  {
    logo: "/images/parceiros/Primacredi.svg",
  },
  {
    logo: "/images/parceiros/viajabrasilconsorcios.png",
  },
  {
    logo: "/images/parceiros/BRBens.png",
  },
  {
    logo: "/images/parceiros/Sulcredi.png",
  },
  {
    logo: "/images/parceiros/edanbank.png",
  },
  {
    logo: "/images/parceiros/Cresol.png",
  }
];

function BannerParceiros() {
  return (
    <ContainerBase bgBase="bg-white">
      <div className="bg-white md:mt-12 text-center p-16 sr-only md:not-sr-only ">
        <h1 className="font-bold text-2xl ml-4 mr-4 py-8">
          PARCEIROS EMBRACON / MARCAS ADMINISTRADAS
        </h1>
        <div className="flex flex-wrap md:px-16 items-center sr-only md:not-sr-only">
        {parceiros.map((parceiro, index) => (
          <div key={index} className="p-4">
            <img key={index} src={parceiro.logo} />
            </div>
          ))}
        </div>
      </div>
    </ContainerBase>
  );
}

export default BannerParceiros;
