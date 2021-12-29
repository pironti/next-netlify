import Image from "next/image"

function BlogCategoraiButton({ categoria }) {
  return (
    <div className="md:w-1/3">
      <div className="bg-white m-4 rounded-xl shadow pb-8">
          <div className="w-full">
              <img className="w-full" src={categoria.imagem} alt={categoria.titulo}/>
          </div>
        <div className="text-2xl text-center font-black text-gray-900 px-4 mt-4">
          {categoria.titulo}
        </div>
      </div>
    </div>
  );
}

export default BlogCategoraiButton;

