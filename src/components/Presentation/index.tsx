import { Link } from "react-router-dom";
import { PresentationStyle } from "./style";
import { AiFillGithub } from "react-icons/ai";

const Presentetion = () => {
  return (
    <PresentationStyle>
      <h2>Olá, meu nome é Roger Magalhães</h2>
      <h1>Eu amo desenvolver projetos e resolver problemas</h1>
      <p>
        Este ambiente foi desenvolvido para demonstrar a você, todos os meus
        projetos e tecnologias.
        <br />
        Sou estudante de programação na Kenzie Academy Brasil, participei de
        diversos projetos resolvendo problemas de alto nível e desenvolvendo
        habilidades
      </p>
      <div>
        <Link to={"/projects"}>Ver projetos</Link>
        <Link
          to={"https://github.com/Rogermferr/Portifolio-Roger-Magalhaes"}
          target="_blank">
          Código fonte deste portifólio
        </Link>
        <Link to={"https://github.com/Rogermferr"} target="_blank">
          <AiFillGithub size={50} color="#fff" />
        </Link>
      </div>
    </PresentationStyle>
  );
};

export default Presentetion;
