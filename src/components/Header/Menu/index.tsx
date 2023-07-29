import { Link, useLocation } from "react-router-dom";
import { MenuStyle } from "./style";
import { MenuProps } from "../interfaces";
import { useContext } from "react";
import { ProjectsContext } from "../../../providers/ProjectsContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Menu = ({ isActive, menuRef }: MenuProps) => {
  const location = useLocation();
  const { pathname } = location;

  const { switchTheme, switchedTheme } = useContext(ProjectsContext);
  return (
    <MenuStyle pathname={pathname} isActive={isActive} ref={menuRef}>
      <Link to={"/"} className="home_link">
        Início
      </Link>

      <Link to={"/contact"} className="contact_link">
        Contato
      </Link>

      <Link to={"/projects"} className="projects_link">
        Projetos
      </Link>

      <button onClick={switchTheme}>
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
