import { Link, useLocation } from "react-router-dom";
import { MenuStyle } from "./style";
import { MenuProps } from "../interfaces";

const Menu = ({ isActive }: MenuProps) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <MenuStyle pathname={pathname} isActive={isActive}>
      <Link to={"/"} className="home_link">
        Home
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
