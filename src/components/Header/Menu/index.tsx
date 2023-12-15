import { Link, useLocation } from "react-router-dom";
import { MenuStyle } from "./style";
import { MenuProps } from "../interfaces";
import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../../providers/ProjectsContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Menu = ({ isActive, menuRef, setIsActive }: MenuProps) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  const { switchTheme, switchedTheme } = useContext(ProjectsContext);
  return (
    <MenuStyle pathname={pathname} isActive={isActive} ref={menuRef}>
      <Link to={"/"} className="home_link">
        Sobre
      </Link>

      <Link to={"/contact"} className="contact_link">
        Contato
      </Link>

      <Link to={"/projects"} className="projects_link">
        Projetos
      </Link>

      <button
        onClick={switchTheme}
        title={
          switchedTheme === "dark" ? "Ativar Modo Claro" : "Ativar Modo Escuro"
        }>
        {switchedTheme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </button>
    </MenuStyle>
  );
};

export default Menu;
