import BlogHomeButton from "../../components/Blog/BlogHomeButton";
import ContainerBase from "../../components/ContainerBase";
import NuvemTag from "../../components/NuvemTag";
import BannerBotoesSimulacoes from "../../components/BannerBotoesSimulacoes";
import BannerSimulacao from "../../components/BannerSimulacao";
import NossaSede from "../../components/NossaSede";
import Template from "../../components/Template";
import { useRouter } from "next/router";

function Consultor({ consultor }) {

  return (
    <Template>
      <ContainerBase>
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Renan</h1>
        </div>
      </ContainerBase>

        <BannerBotoesSimulacoes />
        <BannerSimulacao />
        <NossaSede />
  
    </Template>
  );
}

export default Consultor;
