import Image from "next/image"

function BlogHomeButton({ post }) {
  return (
    <div className="md:w-1/3">
      <div className="bg-white m-4 rounded-xl shadow pb-8">
          <div className="w-full">
              <img className="w-full" src={post.imagem} alt={post.titulo}/>
          </div>
        <div className="text-2xl font-black text-gray-900 px-4 mt-4">
          {post.titulo}
        </div>
        <div className="text-gray-900 px-4 mt-4">
            {post.texto}</div>
        <div className="px-4 flex mt-4 space-x-2">
          <div className="text-red-600 underline ">{post.categoria}</div>
          <div>|</div>
          <div>{post.data}</div>
        </div>
      </div>
    </div>
  );
}

export default BlogHomeButton;
