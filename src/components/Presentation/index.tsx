import { Link } from "react-router-dom";
import { PresentationStyle } from "./style";
import { AiFillGithub } from "react-icons/ai";

const Presentetion = () => {
  return (
    <PresentationStyle>
      <h2>Olá, meu nome é Roger Magalhães</h2>
      <h2>{">"}Dev Full Stack</h2>
      <h1>Eu amo desenvolver projetos e resolver problemas</h1>
      <p>
        Este ambiente foi desenvolvido para demonstrar a você, todos os meus
        projetos e tecnologias.
        <br />
        Sou formado em Tecnólogo de ADS e em Desenvolvimento Web Full Stack pela
        Kenzie Academy Brasil, participei de diversos projetos resolvendo
        problemas de alto nível e desenvolvendo habilidades.
      </p>
      <div>
        <Link to={"/projects"}>Ver projetos</Link>
        <Link
          to={"https://github.com/Rogermferr/Portifolio-Roger-Magalhaes"}
          target="_blank">
          Código fonte deste portifólio
        </Link>
        <Link
          to={
            "https://docs.google.com/document/d/1n-tLmjDt0AGqOPKtUIPrb9v9rh4DsNas/edit?usp=sharing&ouid=117359813972290495977&rtpof=true&sd=true"
          }
          target="_blank">
          Meu CV
        </Link>
        <Link to={"https://github.com/Rogermferr"} target="_blank">
          <AiFillGithub size={50} />
        </Link>
      </div>
    </PresentationStyle>
  );
};

export default Presentetion;
