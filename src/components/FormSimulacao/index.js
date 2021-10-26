function BoxSimulacao() {
  return (
    <div className="bg-default w-full h-full rounded-md p-8">
      <div>
        <input
          type="text"
          name="nome-completo"
          id="nome-completo"
          autoComplete="name"
          className="block mb-4 w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="Nome"
        />
        <input
          type="text"
          name="telefone"
          id="telefone"
          autoComplete="name"
          className="block w-full mb-4 shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="Telefone"
        />

        <input
          type="text"
          name="e-mail"
          id="e-mail"
          autoComplete="name"
          className="block w-full mb-4 shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="E-mail"
        />

        <input
          type="text"
          name="cep"
          id="cep"
          autoComplete="name"
          className="block w-full mb-4 shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="CEP"
        />
        <div className="flex items-center">
          <input
            id="aceito-whats"
            name="aceito-whats"
            type="checkbox"
            className="focus:ring-grape-500 text-grape-600 border-gray-300"
          />
          <label htmlFor="">
            <span className="block text-sm text-gray-700 ml-3">
              Aceito receber contato via WhatsApp
            </span>
          </label>
          
        </div>
        <div className="flex items-center">
            <button
              type="button"
              className="font-normal px-7 py-3 border border-transparent rounded-md bg-red-600 text-white mx-auto mt-4"
            >
              Simule Agora
            </button>
          </div>
      </div>
    </div>
  );
}

export default BoxSimulacao;
