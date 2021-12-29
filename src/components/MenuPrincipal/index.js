import { useState } from "react";

function MenuPrincipal() {

  const [dropDownIndex, setdropDownIndex] = useState(0)
  const [showDropDown, setshowDropPDown] = useState(false)

  const dropdowns = {
    aEmbracom: ['História', 'Parceiros', 'Governança', 'Simulador de Consórcio', 'Demonstração Financeira', 'Devolução de Grupos Encerrados'],
    consorcio: ['Consórcio de Imóveis', 'Consórcio de Veículos', 'Consórcio de Pesados', 'Consórcio de Motos', 'Consórcio de  Serviços'],
    entenda: ['Consórcio', 'Contemplação', 'Cotas', 'Lance', 'Pagamento'],
    faleConosco: ['Unidades e Filiais', 'Fale Conosco', 'Trabalhe Conosco', 'Acessoria de Imprensa', 'Vendedores Autorizados']
  }

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
            <div>
              <div class="lg:inline-flex lg:w-auto mt-2 lg:mt-0">
                <ul class="flex lg:flex-row">
                  <li x-data="{dropdownOpen:false}">
                    <button href="#"
                      className="flex px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
                      data-collapse-toggle="aEmbracomDropDown"
                      onClick={() => { setdropDownIndex(0); setshowDropPDown(true); if (showDropDown && dropDownIndex == 0) setshowDropPDown(false) }}
                    >
                      A Embraconn
                    </button>
                    {dropDownIndex == 0 && showDropDown ?
                      <div class="lg:absolute bg-white rounded-lg z-50 mt-16 shadow-md"
                        id="aEmbracomDropDown"
                      >
                        <ul class="space-y-2 py-2 pr-2">
                          {dropdowns.aEmbracom.map((e, i) => <li><a href="#" class="flex p-1.5 mx-3 font-medium text-black rounded-md hover:bg-gray-100 hover:text-black">{e}</a></li>)}
                        </ul>
                      </div>
                      : null}
                  </li>
                  <li>
                    <button href="#"
                      className="flex px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
                      data-collapse-toggle="aEmbracomDropDown"
                      onClick={() => { setdropDownIndex(1); setshowDropPDown(true); if (showDropDown && dropDownIndex == 1) setshowDropPDown(false) }}
                    >
                      Consórcio
                    </button>
                    {dropDownIndex == 1 && showDropDown ?
                      <div class="lg:absolute bg-white rounded-lg z-50 mt-16 shadow-md"
                        id="aEmbracomDropDown"
                      >
                        <ul class="space-y-2 py-2 pr-2">
                          {dropdowns.consorcio.map((e, i) => <li><a href="#" class="flex p-1.5 mx-3 font-medium text-black rounded-md hover:bg-gray-100 hover:text-black">{e}</a></li>)}
                        </ul>
                        <div class="bg-gray-100 p-4 rounded-lg font-bold px-20 hover:bg-gray-200">
                          Conheça Sobre o Consórcio
                        </div>
                      </div>
                      : null}
                  </li>
                  <li>
                    <button href="#"
                      className="flex px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
                      data-collapse-toggle="aEmbracomDropDown"
                      onClick={() => { setdropDownIndex(2); setshowDropPDown(true); if (showDropDown && dropDownIndex == 2) setshowDropPDown(false) }}
                    >
                      Entenda o Consórcio
                    </button>
                    {dropDownIndex == 2 && showDropDown ?
                      <div class="lg:absolute bg-white rounded-lg z-50 mt-16 shadow-md"
                        id="aEmbracomDropDown"
                      >
                        <ul class="space-y-2 py-2 pr-2">
                          {dropdowns.entenda.map((e, i) => <li><a href="#" class="flex p-1.5 mx-3 font-medium text-black rounded-md hover:bg-gray-100 hover:text-black">{e}</a></li>)}
                        </ul>
                      </div>
                      : null}
                  </li>
                  <li>
                    <a href="#" className="flex px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900">Blog</a>
                  </li>
                  <li>
                    <button href="#"
                      className="flex px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
                      data-collapse-toggle="aEmbracomDropDown"
                      onClick={() => { setdropDownIndex(4); setshowDropPDown(true); if (showDropDown && dropDownIndex == 4) setshowDropPDown(false) }}
                    >
                      Fale Conosco
                    </button>
                    {dropDownIndex == 4 && showDropDown ?
                      <div class="lg:absolute bg-white rounded-lg z-50 mt-16 shadow-md"
                        id="aEmbracomDropDown"
                      >
                        <ul class="space-y-2 py-2 pr-2">
                        {dropdowns.faleConosco.map((e, i) => <li><a href="#" class="flex p-1.5 mx-3 font-medium text-black rounded-md hover:bg-gray-100 hover:text-black">{e}</a></li>)}
                       </ul>
                      </div>
                      : null}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="flex items-center justify-end md:flex-1 lg:w-0 flex">
            <a
              href="#"
              className="invisible md:visible p-3 border-2 border-red-600 rounded-md bg-white text-red-600 shadow-md w-auto flex space-x-4 mr-2"
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
        </div >
      </div >
    </div >
  );
}

export default MenuPrincipal;
