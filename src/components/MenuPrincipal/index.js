import Router from "next/router";
import { useState } from "react";

function MenuPrincipal() {

  const [dropDownIndex, setdropDownIndex] = useState(0)
  const [showDropDown, setshowDropPDown] = useState(false)

  const menus = [
    {
      title: 'A Embracom', index: 0, dropdowns: [
        { title: 'História', route: '' },
        { title: 'Parceiros', route: '' },
        { title: 'Governança', route: '' },
        { title: 'Simulador de Consórcio', route: '' },
        { title: 'Demonstração Financeira', route: '' },
        { title: 'Devolução de Grupos Encerrados', route: '' }
      ]
    },
    {
      title: 'Consórcio', index: 1, dropdowns: [
        { title: 'Consórcio de Imóveis', route: '/consorcio-de-imoveis/', image: '/images/navbar/icoImoveis.svg' },
        { title: 'Consórcio de Veículos', route: '/consorcio-de-carros/', image: '/images/navbar/icoVeiculos.svg' },
        { title: 'Consórcio de Pesados', route: '/consorcio-de-veiculos-pesados/', image: '/images/navbar/icoPesados.svg' },
        { title: 'Consórcio de Motos', route: '/consorcio-motos/', image: '/images/navbar/icoMotos.svg' },
        { title: 'Consórcio de Serviços', route: '/consorcio-servicos/', image: '/images/navbar/icoServicos.svg' }
      ]
    },
    {
      title: 'Entenda o Consórcio', index: 2, dropdowns: [
        { title: 'Consórcio', route: '' },
        { title: 'Contemplação', route: '' },
        { title: 'Cotas', route: '' },
        { title: 'Lance', route: '' },
        { title: 'Pagamento', route: '' }
      ]
    },
    { title: 'Blog', index: 3, route: '', },
    {
      title: 'Fale Conosco', index: 4, dropdowns: [
        { title: 'Unidades e Filiais', route: '' },
        { title: 'Fale Conosco', route: '' },
        { title: 'Trabalhe Conosco', route: '' },
        { title: 'Acessoria de Imprensa', route: '' },
        { title: 'Vendedores Autorizados', route: '' },
      ]
    }
  ]

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
            <div>
              <ul>
                {/* {dropdowns.map((menu, index) => {
                  <li key={index}><a>{menu.desc}</a>+</li>
                })} */}
              </ul>
            </div>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div>
              <div className="lg:inline-flex lg:w-auto mt-2 lg:mt-0">
                <ul className="flex lg:flex-row">
                  {menus.map((menu, index) =>
                    <li key={index}>
                      <button href="#"
                        className="flex px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
                        data-collapse-toggle="aEmbracomDropDown"
                        onClick={() => {
                          menu.route ?
                            Router.push(menu.route)
                            : setdropDownIndex(menu.index); setshowDropPDown(true); if (showDropDown && dropDownIndex == menu.index) setshowDropPDown(false)
                        }}
                      >
                        {menu.title}
                      </button>
                      {
                        menu.dropdowns ?
                          dropDownIndex == menu.index && showDropDown ?
                            <div className="lg:absolute bg-white rounded-lg z-50 mt-16 shadow-md"
                              id="aEmbracomDropDown"
                            >
                              <ul className="space-y-2 py-2 pr-2">
                                {menu.dropdowns.map((dropdown, index) =>
                                  <li key={index}
                                    onClick={() => Router.push(dropdown.route)}
                                  >
                                    <a href="#" className="flex p-1.5 mx-3 font-medium text-black rounded-md hover:bg-gray-100 hover:text-black">
                                      {dropdown.image ?
                                        <img src={dropdown.image} className="pr-4" />
                                        : null}
                                      {dropdown.title}
                                    </a>
                                  </li>
                                )}
                              </ul>
                            </div>
                            : null
                          : null
                      }
                    </li>
                  )}
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
