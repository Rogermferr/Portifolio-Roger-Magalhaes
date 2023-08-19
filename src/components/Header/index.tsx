import Menu from "./Menu";
import { HeaderMenuBackground, HeaderStyle } from "./style";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import useOutClick from "../../hooks/useOutClick";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const menuRef = useOutClick(() => {
    setIsActive(false);
  });

  return (
    <HeaderStyle>
      <h1>Roger Magalhães</h1>
      <span onClick={() => setIsActive(!isActive)}>
        {isActive ? <AiOutlineClose size={25} /> : <FaBars size={25} />}
      </span>

      <Menu isActive={isActive} menuRef={menuRef} />
      <HeaderMenuBackground isActive={isActive} />
    </HeaderStyle>
  );
};

export default Header;
