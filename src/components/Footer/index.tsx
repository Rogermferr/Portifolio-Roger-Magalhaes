import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FooterStyle } from "./style";

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <p>Me siga nas minhas redes sociais para conversarmos</p>
      </div>
      <div>
        <Link to={"https://www.instagram.com/rogermferr/"} target="_blank">
          <AiFillInstagram size={40} />
        </Link>
        <Link
          to={"https://www.facebook.com/profile.php?id=100005434486320"}
          target="_blank">
          <AiFillFacebook size={40} />
        </Link>
        <Link to={"https://www.linkedin.com/in/rogermferr/"} target="_blank">
          <AiFillLinkedin size={40} />
        </Link>
      </div>
    </FooterStyle>
  );
};

export default Footer;
