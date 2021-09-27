# Projeto GX - Site Embracon e Parcerias

## Overview

Atualmente temos o site da Embracon hospedado na plataforma Webflow porém ao analisar as auditorias do LightHouse (Google) identificamos varias melhorias que poderiam ser implementadas para melhorar o desempenho do site.

## Objetivo

Implementar um novo frontend e backend afim de melhorar a **performance**, **acessibilidade**, **melhores práticas**, **SEO** e **PWA**.

Segue um exemplo do estado atual da nota no **LightHouse**:

![image-20210922112507472](https://embraconadm-my.sharepoint.com/personal/pironti_leonardo_embracon_com_br/Documents/g10/assets/image-20210922112507472.png)

## Principais problemas de performance

- Reduzir o tamanho do javascript e remover javascripts não utilizados
- Eliminar recusos que bloqueiam a renderização
- Utilizar lazy-loading para imagens
- Utilizar imagens de última geração (WEBP)
- Reduzir o CSS não utilizado
- Habilitar a compressão de texto

## Relatório atual

​	[Relatório do LightHouse](https://embraconadm-my.sharepoint.com/:b:/g/personal/pironti_leonardo_embracon_com_br/ES-ovfPOn91DkxFIFbpX6kYBkjCAtiUZhH3vXc7UAYh1jQ?e=3w1Woo)

## Stack do projeto

### Frontend 

#### Styleguide

- [Link do guia](https://www.figma.com/proto/J8v6txn38otM52cvImDdti/Guia-de-Estilo-Embracon?node-id=1%3A3845&starting-point-node-id=1%3A1333)
- [Exemplo home](https://www.figma.com/file/1aaSREeaKUYUnWnKFj2Xm7/Estudo-Site-Embracon?node-id=160%3A0)

#### Hierarquia de páginas

- / (home) 
- /carta-de-credito **TEMPLATE 1**
- /a-embracon **TEMPLATE 1**
- /campanha **TEMPLATE 1**
  - Conteúdo institucional e simulador
  - Conteúdo sobre os principais bens (Auto, Imóvel, Serviços, Moto e Pesados)
- /assessoria-de-imprensa **TEMPLATE 1**
- /chatvendedor **TEMPLATE 1**
- /clientes **TEMPLATE 1**
- /consorcio **TEMPLATE 1**
  - Simulador e conteúdo de consórcio
- /consorcio-de-carros (**muda apenas a palavra chave**) **TEMPLATE 2**
  - /consorcio-de-automovel 
  -  /consorcio-de-carros-seminovos 
  - /consorcio-de-carros-esportivos
  - /consorcio-de-suv
  - /consorcio-de-picape
  - /consorcio-de-carros-hatch
  - /consorcio-automotivo
  - /consorcio-de-carros-sedan
  - /consorcio-de-carro-usado
  - /consorcio-de-carro-zero
  - /consorcio-de-jipe
- /consorcio-de-imoveis **TEMPLATE 2**
  - /consorcio-de-casa-geminada
  - /consorcio-imobiliario
  - /consorcio-residencial
  - /consorcio-de-casa-em-condominio
  - /consorcio-de-casa
  - /consorcio-de-casas
  - /consorcio-de-casa-de-praia
  - /consorcio-de-apartamento
- /consorcio-motos **TEMPLATE 2**
  - /consorcio-de-motocicleta
  - /consorcio-de-moto
- /consorcio-servicos (redirecionar para /consorcio-de-servicos) **TEMPLATE 2**
  - /consorcio-de-reformas
  - /consorcio-cirurgia
  - /consorcio-de-intercambio
  - /consorcio-de-viagens
- /consorcio-de-veiculos-pesados (redirecionar para /consorcio-de-pesados) **TEMPLATE 2**
  - /consorcio-de-maquinas
  - /consorcio-agricola
  - /consorcio-de-caminhao
  - /consorcio-de-cirurgia-plastica
  - /consorcio-de-tratores
  - /consorcio-de-maquinas-pesadas
- /consultar-grupos-encerrados **TEMPLATE 3**
  - Integração com API de TI
- /consulta-denuncia **TEMPLATE 4**
- /covid-19 **TEMPLATE 1**
- /demonstracoes-financeiras **TEMPLATE 1**
- /canal-de-denuncia **TEMPLATE 1**
  - Formulário de denuncia
  - Integração com API do MKT
- /denuncia **TEMPLATE 5**
- /emissao-de-boleto **TEMPLATE 1**
  - Iframe de TI para logar e acessar
- /fale-conosco (ver para onde vai o form) **TEMPLATE 1**
- /fale-com-consultor (ver para onde vai form) **TEMPLATE 1**
- /governanca **TEMPLATE 6**
- /guia-do-contemplado **TEMPLATE 7**
  - Anexos em PFD
- /instituto-ethos (página de conteúdo) **TEMPLATE 1**
- /login-parceiros **TEMPLATE 1**
- /marca-empregadora **TEMPLATE 1**
- /marca-empregadora/analista-de-controle-de-sac **TEMPLATE 1**
- /nossos-consultores **TEMPLATE 1**  
- /politicas-de-privacidade **TEMPLATE 1**
- /termo-de-consentimento **TEMPLATE 1**
- /lgpd **TEMPLATE 1**
- /politica-de-cookie **TEMPLATE 1**
- /politicas-financeiras **TEMPLATE 1**
- /blog-parceiro **TEMPLATE 1**
- /video-de-parceiro **TEMPLATE 8**
- /contato-parceiro **TEMPLATE 9**
  - Integração de envio de Email API TI
- /seja-parceiro **TEMPLATE 10**
  - Integração de envio de Email API TI
- /campanha-livelo-adesao **TEMPLATE 1**
  - Iframe de TI com formulário de acesso

#### Collections 

- /imoveis/consorcio-de-imoveis-em-andamento
- /marcas/consorcio-para-caminhoes-volvo
- /carros/carros-de-luxo-do-brasil
- /servicos/consorcio-simulador
- /lp-embracon/consorcio-sao-miguel-do-oeste (Collection de cidades) **consorcio-niteroi**
- /lp/so-carrao (Collection de parceiros como CAACE, CAARJ, Dynamus, etc)
- /convenios/consorciocristao (Collection de igrejas)
- /parceiro/pironti-leonardo (Integração com backend Página do consultor)
- /consultor/pironti-leonardo (Integração com backend Página do consultor)
- /categoria-de-videos (Blog de parceiro)
- /video-de-parceiro (Blog de parceiro)
- /categoria-parceiros (Categorias do blog de parceiro)
- /blog-parceiros (Blog posts do blog de parceiro)
- /cidades/sao-jose
- /estados/parana
- /materiais-gratuitos
- /blog/financas-para-criancas-dicas-de-como-ensinar-sobre-dinheiro-desde-cedo
  - Listagem de conteúdo do blog 
- /categorias/pesados
  - Listagem de conteúdo das categorias do blog
  - mudar de /categorias para /blog/categorias (Redirect)
- /tag/moto
  - Listagem de conteúdo das tags do blog
  - mudar de /tag para /blog/tags (Redirect)
- /conhecaoconsorcio/quais-sao-os-riscos-de-nao-pagar-as-parcelas-do-consorcio
- /filiais/vila-velha-ii

#### NextJS

##### Intro

Escolhemos por utilizar essa tecnologia pois é um dos frameworks que possui a maior quantidade de otimizações e ferramentas para desempenho web. Como exemplo, segue algumas das funcionalidades que **DEVEM** estar presentes nesse projeto:

##### Ambiente de desenvolvimento

​	Versionamento de código: 

- github.com/pironti/next-netlify (Template inicial)
- Node: 14.17.5

##### Pre-reqs

- **Next/Image**: Componente de imagens do next para otimizações de imagens. [Link de referência](https://nextjs.org/docs/basic-features/image-optimization)
- **Otimização de fontes**: [Link de referência](https://nextjs.org/docs/basic-features/font-optimization)
- **Otimização de scripts**: [Link de referência](https://nextjs.org/docs/basic-features/script)
- **Implementação de AMP para as principais páginas e blog**: [Link de referência](https://nextjs.org/docs/api-reference/next/amp)
- **PWA para as principais páginas e blog:** [Link de referência](https://github.com/vercel/next.js/blob/canary/examples/progressive-web-app)
- **Sitemap** [Link de referência](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap?hl=pt-br)
- **Robots.txt** [Link de referência](https://developers.google.com/search/docs/advanced/robots/create-robots-txt?hl=pt-br)
- **Schema Markup**: [Link de referência](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data?hl=pt-br)

O frontend deve ser criado com **Next.js** utilizando as melhores práticas de **SSR** e **SSG**. O site **NÃO** pode ser criado como **SPA** pois precisamos que todos os conteúdos sejam indexados pelo Google.

O lighthouse será uma das principais ferramentas para monitoramento da performance do site, logo os prerequisitos devem ser atendidos: [Web vitals - Melhores práticas de desenvolvimento web moderno](https://web.dev/vitals/)

##### Cache e hospedagem

Utilizaremos a política e infraestrutura de cache e hopedagem da [vercel.com](https://vercel.com/) 

[Solução vercel com Nextjs](https://vercel.com/solutions/nextjs)

[Servless functions](https://vercel.com/docs/concepts/functions/introduction)

[Edge Network](https://vercel.com/docs/concepts/edge-network/overview)

[Geração de página estática incremental](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration)

##### Template do projeto Github

Criei um template de inicio básico, com o CMS [Netlify](https://www.netlifycms.org/) para as collections do Webflow citadas acima.

Já implementamos o CMS no repositório do git para facilitar o backoffice de manutenção do site. Ou seja, as configurações / novos itens das collections podem ser adicionados em um frontend já criado, padronizando e diminuindo a necessidade de customizações.

[Link do repositório](https://github.com/pironti/next-netlify)

##### Netlify.cms

As principais páginas do site devem conter um item no CMS correspondente.

Lista de meta tags presentes hoje no site e devem ter uma página corresponde no cms para configuração. Exemplo: [Link da página de configurações do repositório](http://localhost:3000/cms-content/index.html#/collections/config)

- google-site-verification
- facebook-domain-verification
- script google tag manager
- scripts de chat

Página inicial do CMS **localhost:3000/cms-content/index.html**
