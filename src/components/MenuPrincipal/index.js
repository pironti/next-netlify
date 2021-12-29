function MenuPrincipal() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="w-auto"
                src="/images/logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              A Embracon
            </a>

            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Consórcio
            </a>

            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Entenda o Consórcio
            </a>

            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Fale Conosco
            </a>
          </nav>
          <div className="flex items-center justify-end md:flex-1 lg:w-0 flex">
            <a
              href="#"
              className="invisible md:visible p-3 border-2 border-red-600 rounded-md bg-white text-red-600 shadow-md w-auto flex space-x-4 mr-4"
            >
              <img
                className="" src="/images/barcode.svg" alt=""
              /> &nbsp;
              2ª via boleto
            </a> 
            <a
              href="#"
              className="invisible md:visible p-3 border-2 border-red-600 border-transparent rounded-md bg-red-600 text-white shadow-md "
            >
              Clientes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPrincipal;
