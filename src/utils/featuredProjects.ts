export interface IFeaturedProject {
  title: string;
  demo: string | null;
  repository: string;
  image: string;
  description: string;
}

export const featuredProjectsData: IFeaturedProject[] = [
  {
    title: "Kenzie Movies",
    demo: "https://kenzie-movies.vercel.app/",
    repository: "https://github.com/Rogermferr/kenzie-movies",
    image: "https://live.staticflickr.com/65535/52938227487_294cd4b3af_k.jpg",
    description:
      "Esta é uma plataforma interativa onde os usuários podem favoritar os filmes já existentes no site para acompanhá-los posteriormente e também podem solicitar o cadastro de um novo filme, sendo aprovado ou rejeitado pelos administradores.",
  },
  {
    title: "Kenzie Hub",
    demo: "https://kenzie-hub-theta-eight.vercel.app/",
    repository: "https://github.com/Rogermferr/Projeto-Kenzie-Hub",
    image: "https://live.staticflickr.com/65535/52938155571_66cb8681dc_k.jpg",
    description:
      "Projeto que permite o cadastro e login de usuários e os mesmos poderão adicionar suas tecnologias e gerenciá-las.",
  },
  {
    title: "Kenzie Burguer",
    demo: "https://kenzie-burguer-v2-template-rogermferr.vercel.app/",
    repository: "https://github.com/Rogermferr/Projeto-Hamburgueria-Kenzie",
    image: "https://live.staticflickr.com/65535/52938813791_0278884644_k.jpg",
    description:
      "Projeto que permite o cadastro e login de usuários na plataforma de delivery podendo adicionar produtos ao carrinho de compras.",
  },
  {
    title: "Livraria Cultura Kenzie API",
    demo: "https://bookstorecultura.onrender.com/api/docs/swagger/",
    repository: "https://github.com/Rogermferr/livraria-api-grupo-22",
    image: "https://live.staticflickr.com/65535/53080376115_bd9fa8afa0_k.jpg",
    description:
      "A API Livraria Cultura Kenzie é uma poderosa ferramenta desenvolvida em Python e o framework Django que permite gerenciar uma biblioteca de forma eficiente. Esta API oferece as seguintes funcionalidades:",
  },
  {
    title: "Kenzie Kontacts",
    demo: "https://kenzie-kontacts.vercel.app/",
    repository: "https://github.com/Rogermferr/kenzie-kontacts",
    image: "https://live.staticflickr.com/65535/53080470523_cae8bec9f3_k.jpg",
    description:
      "Uma aplicação de Gerenciamento de Usuários e Contatos é uma poderosa ferramenta desenvolvida para simplificar e agilizar a criação, leitura, atualização e exclusão de informações de usuários e seus respectivos contatos.",
  },
  {
    title: "CRUD User and Contacts",
    demo: "https://kenzie-kontacts.vercel.app/",
    repository: "https://github.com/Rogermferr/crud-user-contacts-api",
    image: "https://live.staticflickr.com/65535/53080470523_cae8bec9f3_k.jpg",
    description:
      "A API de Gerenciamento de Usuários e Contatos é uma poderosa ferramenta desenvolvida para simplificar e agilizar a criação, leitura, atualização e exclusão de informações de usuários e seus respectivos contatos.",
  },
  {
    title: "BandKamp Generic View",
    demo: "https://m5-bandkamp-generic-view-rogermferr.vercel.app/api/docs/swagger-ui/",
    repository:
      "https://github.com/Rogermferr/bandkamp-generic-view-Rogermferr",
    image: "https://live.staticflickr.com/65535/53086470495_07739a35c1_k.jpg",
    description:
      "Api que permite o crud de usuário, adição de albuns e suas músicas.",
  },
];
