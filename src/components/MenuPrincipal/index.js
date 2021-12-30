import Router from "next/router";
import { useState } from "react";

function MenuPrincipal() {

  const [dropDownIndex, setdropDownIndex] = useState(0)
  const [showDropDown, setshowDropPDown] = useState(false)
  const [showMobileMenu, setshowMobileMenu] = useState(false)

  function select(menu, event) {
    menu.route ?
      Router.push(menu.route)
      : setdropDownIndex(menu.index); setshowDropPDown(true); if (showDropDown && dropDownIndex == menu.index) setshowDropPDown(false)
    if (menu.index == 3) setshowDropPDown(false)
  }

  function handleShowMobileMenu() {
    setshowMobileMenu(!showMobileMenu)
    setshowMobileMenu(!showMobileMenu)
    setshowDropPDown(false)
  }

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
    { title: 'Blog', index: 3, route: '/blog', },
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
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 bg-white">
        <div className="flex justify-between px-2  items-center md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img className="w-20 lg:w-auto" onClick={() => Router.push('/')} src="/images/logo.svg" alt="Embracon" />
            </a>
          </div>
          <div className="inline-flex items-center justify-end ml-2 w-96 md:hidden">
            <a href="#" className="p-1.5 mr-1 border-2 border-red-600 border-transparent rounded-md bg-red-600 text-white text-sm shadow-md ">
              Clientes
            </a>
            <div className="pl-2" >
              <button className="w-10">
                <img onClick={handleShowMobileMenu} src={showMobileMenu ? "/images/navbar/icoClose.svg" : "/images/navbar/icoMenu.svg"} />
              </button>
              {showMobileMenu ?
                <div className="absolute sm:absolute xsm:absolute rounded-lg w-[250px] right-0 z-50 mt-10 shadow-lg bg-white mr-10">
                  <ul className="divide-y">
                    {menus.map((menu, index) =>
                      <div key={index}>
                        <button className="w-full text-left hover:bg-gray-100">
                          <li key={index} className="p-2 font-semibold align-middle text-sm" onClick={() => select(menu, event)}>
                            {menu.title.toUpperCase()}
                            {menu.dropdowns ?
                              <div className="float-right align-middle">
                                <img src={dropDownIndex == menu.index && showDropDown ? "/images/navbar/icoLess.svg" : "/images/navbar/icoMore.svg"} width="12" className="pt-1.5" />
                              </div>
                              : null}

                            <div className="border-b-3 border-gray-200 px-4"></div>
                          </li>
                        </button>
                        {menu.dropdowns && showDropDown && dropDownIndex == menu.index ?
                          <ul className="px-1">
                            {menu.dropdowns.map((dropdown, index) =>
                              <li key={index} className="font-normal text-sm py-1" onClick={() => Router.push(dropdown.route)}>
                                <button className="w-full px-1 text-left rounded-md hover:bg-gray-100">{dropdown.title}</button>
                              </li>
                            )}
                          </ul>
                          : null}
                      </div>
                    )}
                  </ul>
                </div>
                : null}
            </div>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div>
              <div className="md:inline-flex lg:w-auto mt-2 lg:mt-0">
                <ul className="md:inline-flex">
                  {menus.map((menu, index) =>
                    <li key={index}>
                      <button href="#"
                        className="flex px-1 md:px-3 py-2 text-md md:text-xs text-base font-medium text-gray-500 hover:text-gray-900 "
                        data-collapse-toggle="aEmbracomDropDown"
                        onClick={(event) => select(menu, event)}
                      >
                        {menu.title}
                      </button>
                      {
                        menu.dropdowns ?
                          dropDownIndex == menu.index && showDropDown ?
                            <div className={`absolute bg-white rounded-lg  z-50 mt-10 shadow-md`}>
                              <ul className="space-y-2 py-2 ">
                                {menu.dropdowns.map((dropdown, index) =>
                                  <li key={index} onClick={() => Router.push(dropdown.route)}>
                                    <a href="#" className={`flex py-1.5 px-2 mx-3 font-medium min-w-[200px] text-black rounded-md hover:bg-gray-100 hover:text-black${menu.index == 2 ? " pr-20" : ""}`}>
                                      {dropdown.image ?
                                        <img src={dropdown.image} className="pr-4" />
                                        : null}
                                      {dropdown.title}
                                    </a>
                                  </li>
                                )}
                              </ul>
                              {menu.index == 1 ?
                                <li key={index} onClick={() => Router.push(dropdown.route)}>
                                  <a href="#" className={`flex p-1.5 px-20 py-3 font-bold text-black rounded-md bg-gray-100 hover:bg-gray-200 hover:text-black`}>
                                    Conheça Sobre o Consórcio
                                  </a>
                                </li>
                                : null}
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
          <div className="hidden lg:inline-flex items-center justify-end md:flex-1 lg:w-0 flex">
            <a href="#" className="p-1  lg:p-3 border-2 border-red-600 rounded-md bg-white text-red-600 shadow-md w-auto flex space-x-4 mr-2 md:text-xs">
              <img className="" src="/images/barcode.svg" alt="" /> &nbsp;
              2ª via boleto
            </a>
            <a href="#" className="p-1 lg:p-3 border-2 border-red-600 border-transparent rounded-md bg-red-600 text-white shadow-md md:text-xs ">
              Clientes
            </a>
          </div>
        </div >
      </div >
    </div >
  );
}

export default MenuPrincipal;
