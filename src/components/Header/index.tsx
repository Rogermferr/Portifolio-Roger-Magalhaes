import Menu from "./Menu";
import { HeaderStyle } from "./style";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <HeaderStyle>
      <h1>Roger Magalhães</h1>
      <span onClick={() => setIsActive(!isActive)}>
        {isActive ? <AiOutlineClose size={30} /> : <FaBars size={25} />}
      </span>

      <Menu isActive={isActive} />
    </HeaderStyle>
  );
};

export default Header;
