import Template from "../../components/Template";
import ContainerBase from "../../components/ContainerBase";
import BlogCategoraiButton from "../../components/Blog/BlogCategoria";
import NuvemTag from "../../components/NuvemTag";

const categorias = [
  {
    imagem: "/images/blog/categorias/blogCategoriaAssemb.png",
    titulo: "Assembléia",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCarros.png",
    titulo: "Carro",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCons.png",
    titulo: "Consórcio",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaAssemb.png",
    titulo: "Assembléia",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCarros.png",
    titulo: "Carro",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCons.png",
    titulo: "Consórcio",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaAssemb.png",
    titulo: "Assembléia",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCarros.png",
    titulo: "Carro",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCons.png",
    titulo: "Consórcio",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaAssemb.png",
    titulo: "Assembléia",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCarros.png",
    titulo: "Carro",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCons.png",
    titulo: "Consórcio",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaAssemb.png",
    titulo: "Assembléia",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCarros.png",
    titulo: "Carro",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCons.png",
    titulo: "Consórcio",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaAssemb.png",
    titulo: "Assembléia",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCarros.png",
    titulo: "Carro",
    link: "#",
  },
  {
    imagem: "/images/blog/categorias/blogCategoriaCons.png",
    titulo: "Consórcio",
    link: "#",
  },
];

function CategoriasBlog() {
  return (
    <Template>
      <ContainerBase>
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Categorias</h1>
          <h2 className="font-bold text-2xl">
            Confira todas as categorias do nosso blog
          </h2>
        </div>
      </ContainerBase>

      <ContainerBase>
        <div class="md:flex flex-wrap m-4">
          {categorias.map((categoria, index) => (
            <BlogCategoraiButton
              key={index}
              categoria={categoria}
            ></BlogCategoraiButton>
          ))}
        </div>
      </ContainerBase>
      <ContainerBase>
          <NuvemTag/>
      </ContainerBase>
    </Template>
  );
}

export default CategoriasBlog;
