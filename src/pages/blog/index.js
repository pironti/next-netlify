import ContainerBase from "../../components/ContainerBase";
import Template from "../../components/Template";
import BlogHomeButton from "./BlogHomeButton";

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

function Blog() {
  return (
    <Template>
      <ContainerBase>
        <div class="flex flex-wrap">
          {posts.map((post, index) => (
            <BlogHomeButton key={index} post={post}></BlogHomeButton>
          ))}
        </div>
      </ContainerBase>
    </Template>
  );
}

export default Blog;
