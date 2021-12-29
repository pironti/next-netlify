import BlogHomeButton from "../../components/Blog/BlogHomeButton";
import ContainerBase from "../../components/ContainerBase";
import NuvemTag from "../../components/NuvemTag";
import Template from "../../components/Template";
import { useRouter } from "next/router";

const posts = [
  {
    imagem: "/images/post.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
  },
  {
    imagem: "/images/post2.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
  },
  {
    imagem: "/images/post3.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
  },
  {
    imagem: "/images/post.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
  },
  {
    imagem: "/images/post2.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
  },
  {
    imagem: "/images/post3.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
  },
  {
    imagem: "/images/post.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
  },
];

function Blog({ categoria }) {
  const router = useRouter();

  console.log(router);

  const titulo = router.query.categoria;

  return (
    <Template>
      <ContainerBase>
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{titulo}</h1>
        </div>
      </ContainerBase>

      <ContainerBase>
        <div class="flex flex-wrap">
          {posts.map((post, index) => (
            <BlogHomeButton key={index} post={post}></BlogHomeButton>
          ))}
        </div>
      </ContainerBase>
      <ContainerBase>
        <NuvemTag />
      </ContainerBase>
    </Template>
  );
}

export default Blog;
