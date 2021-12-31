import ContainerBase from "../../components/ContainerBase";
import NuvemTag from "../../components/NuvemTag";
import Template from "../../components/Template";
import BlogHomeButton from "../../components/Blog/BlogHomeButton";

const posts = [
  {
    imagem: "/images/post.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
    link: "blog/carro-automatico-vale-a-pena",
  },
  {
    imagem: "/images/post2.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
    link: "blog/carro-automatico-vale-a-pena",
  },
  {
    imagem: "/images/post3.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
    link: "blog/carro-automatico-vale-a-pena",
  },
  {
    imagem: "/images/post.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
    link: "blog/carro-automatico-vale-a-pena",
  },
  {
    imagem: "/images/post2.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
    link: "blog/carro-automatico-vale-a-pena",
  },
  {
    imagem: "/images/post3.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
    link: "blog/carro-automatico-vale-a-pena",
  },
  {
    imagem: "/images/post.png",
    titulo: "Carro automático vale a pena?",
    texto:
      "Quer trocar para o carro automático? Saiba tudo sobre o funcionamento dos carros automáticos e veja as vantagens e desvantagens desse tipo de carro.",
    data: "14/10/2021",
    categoria: "Carros",
    link: "blog/carro-automatico-vale-a-pena",
  },
];

function Blog() {
  return (
    <Template>
      <ContainerBase>
        <div className="flex flex-wrap">
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
