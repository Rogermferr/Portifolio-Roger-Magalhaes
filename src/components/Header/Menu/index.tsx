import { Link, useLocation } from "react-router-dom";
import { MenuStyle } from "./style";
import { MenuProps } from "../interfaces";

const Menu = ({ isActive, menuRef }: MenuProps) => {
  const location = useLocation();
  const { pathname } = location;
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
    </MenuStyle>
  );
};

export default Menu;
