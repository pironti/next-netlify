import Router from "next/router";

function Rodape() {

  const date = new Date();
  const icones = [
    { img: '/images/footer/icoFacebook.svg', title: 'Facebook', route: '' },
    { img: '/images/footer/icoTwiter.svg', title: 'Twiter', route: '' },
    { img: '/images/footer/icoLinkedin.svg', title: 'Linkedin', route: '' },
    { img: '/images/footer/icoYoutube.svg', title: 'Youtube', route: '' },
    { img: '/images/footer/icoInstagram.svg', title: 'Instagram', route: '' },
  ]
  const menus = [
    {
      title: "A Embracoon",
      itens: [
        { title: 'História', route: '' },
        { title: 'Parceiros', route: '' },
        { title: 'Governança', route: '' },
      ]
    },
    {
      title: 'Consórcio',
      itens: [
        { title: 'Carta de Crédito', route: '' },
        { title: 'O que é Consórcio', route: '' },
        { title: '', route: '' },
        { title: 'Consórcio de Imóveis', route: '' },
        { title: 'Consórcio de Carros', route: '' },
        { title: 'Consórcio de Motos', route: '' },
        { title: 'Consórcio de Serviços', route: '' },
        { title: 'Consórcio de Pesados', route: '' },
        { title: 'Simulador de Consórcio', route: '' },
        { title: 'Falar com um Especialista', route: '' }
      ]
    },
    {
      title: 'Entenda o Consórcio',
      itens: [
        { title: 'Consórcio', route: '' },
        { title: 'Contemplação', route: '' },
        { title: 'Cotas', route: '' },
        { title: 'Lance', route: '' },
        { title: 'Pagamento', route: '' },
      ]
    },
    {
      title: 'Parceria',
      itens: [
        { title: 'Seja um Parceiro', route: '' },
        { title: 'Área do Parceiro', route: '' },
      ]
    },
    {
      title: 'Blog',
      itens: [
        { title: 'Postagens Recentes', route: '' },
      ]
    },
    {
      title: 'LGPD',
      itens: [
        { title: 'Portal da privacidade', route: '' },
        { title: 'Portal do titular', route: '' },
        { title: 'Consentimentos', route: '' },
        { title: 'Pedidos dos titulares', route: '' },
      ]
    },
    {
      title: 'Cliente',
      itens: [
        { title: 'Área do Cliente', route: '' },
        { title: '2ª Via de Boleto', route: '' },
        { title: 'Assembleia', route: '' },
        { title: 'Devolução de Grupos Encerrados', route: '' },
        { title: 'Guia do Contemplado', route: '' },
      ]
    },

    {
      title: 'Filiais',
      itens: [
        { title: 'Localizar Filiais', route: '' },
      ]
    },
    {
      title: 'Dúvidas Frequentes',
      itens: [
        { title: 'Acessar FAQ', route: '' },
      ]
    },
    {
      title: 'Fale Conosco',
      itens: [
        {
          title: `SAC: 0800 889 0999 | 4003 9999
        Ouvidoria: 0800 888 4321
        ouvidoria@embracon.com.br
        relacionamento@embracon.com.br
        Deficiência auditiva e fala:
        0800 886 0006
        (Segunda a sexta das 08h às 19h)`, route: ''
        },
        { title: 'Trabalhe Conosco', route: '' },
        { title: 'Assessoria de Imprensa', route: '' },
        { title: 'Vendedores Autorizados', route: '' },
      ]
    },


  ]
  return (
    <footer className="bg-gray-500 mt-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:py-16 lg:px-0">
        <div className="lg:grid lg:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex grow space-x-6 justify-center">
              <a>
                <span className="sr-only">Embracon</span>
                <img
                  className="w-50"
                  src="/images/footer/logoEmbracon.svg"
                  alt="Company name"
                />
              </a>
            </div>
            <div className="text-white text-center text-sm text-thin">
              <p> Embracon Administradora de Consórcio LTDA</p>
              <p>CNPJ: 58.113.812/0001-23</p>
              <p>Autorizado pelo Banco Central Nº 3/00/223/88</p>
              <p> Data: 15/08/88</p>
            </div>
            <div className="flex grow space-x-6 justify-center">
              {icones.map((icone, index) =>
                <a key={index} href={icone.route} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{icone.title}</span>
                  <img src={icone.img} />
                </a>
              )}
            </div>
          </div>
          <div className="mt-12 md:flex block  gap-8 xl:mt-0 xl:col-span-2">
            <div>
              {menus.filter((e, i) => i == 0 || i == 1).map((menu, index) =>
                <div key={index} className={index == 1 ? "mt-12 md:mt-0" : " mb-7"}>
                  <h3 className="text-sm font-semibold text-white tracking-wider">
                    {menu.title}
                  </h3>
                  <ul role="list" className="mt-2 space-y-1">
                    {menu.itens.map((item, index) =>
                      <li key={index}>
                        <a href={''} onClick={() => Router.push(item.route || '')} className="text-sm font-extralight text-white hover:text-gray-100">
                          {item.title}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div>
              {menus.filter((e, i) => i >= 2 && i <= 5).map((menu, index) =>
                <div key={index} className={index < 0 ? "mt-12 md:mt-0" : " mb-7"}>
                  <h3 className="text-sm font-semibold text-white tracking-wider">
                    {menu.title}
                  </h3>
                  <ul role="list" className="mt-2 space-y-1">
                    {menu.itens.map((item, index) =>
                      <li key={index}>
                        <a href={item.route || ''} className="text-sm font-extralight text-white hover:text-gray-100">
                          {item.title}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div>
              {menus.filter((e, i) => i >= 6 && i <= 8).map((menu, index) =>
                <div key={index} className={index < 0 ? "mt-12 md:mt-0" : " mb-7"}>
                  <h3 className="text-sm font-semibold text-white tracking-wider">
                    {menu.title}
                  </h3>
                  <ul role="list" className="mt-2 space-y-1">
                    {menu.itens.map((item, index) =>
                      <li key={index}>
                        <a href={item.route || ''} className="text-sm font-extralight text-white hover:text-gray-100">
                          {item.title}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <div className="md:grid md:grid-cols-1 md:gap-8">
                <h3 className="text-sm font-semibold text-white tracking-wider">
                  Fale Conosco
                </h3>
                <ul role="list" className="mt-2 space-y-1">
                  <li>
                    <a className="text-sm font-extralight text-white hover:text-gray-100">
                      SAC: 0800 889 0999 | 4003 9999
                    </a>
                  </li>
                  <li>
                    <a className="text-sm font-extralight text-white hover:text-gray-100">
                      Ouvidoria: 0800 888 4321
                    </a>
                  </li>
                  <li>
                    <a className="text-sm font-extralight text-white hover:text-gray-100">
                      ouvidoria@embracon.com.br
                    </a>
                  </li>
                  <li>
                    <a className="text-sm font-extralight text-white hover:text-gray-100">
                      relacionamento@embracon.com.br
                    </a>
                  </li>
                  <li>
                    <a className="text-sm font-extralight text-white hover:text-gray-100">
                      Deficiência auditiva e fala:
                    </a>
                  </li>
                  <li>
                    <a className="text-sm font-extralight text-white hover:text-gray-100">
                      0800 886 0006
                    </a>
                  </li>
                  <li>
                    <a className="text-sm font-extralight text-white hover:text-gray-100">
                      (Segunda a sexta das 08h às 19h)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm font-extralight text-white hover:text-gray-100">
                      Trabalhe Conosco
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm font-extralight text-white hover:text-gray-100">
                      Assessoria de Imprensa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm font-extralight text-white hover:text-gray-100">
                      Vendedores Autorizados
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {date.getFullYear()} Embracon, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
