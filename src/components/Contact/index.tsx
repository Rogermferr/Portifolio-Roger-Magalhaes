import { Link } from "react-router-dom";
import { ContactStyle } from "./style";
import wpp from "../../assets/wpp.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";

const Contact = () => {
  return (
    <ContactStyle>
      <div>
        <img src={wpp} alt="Logo Whatsapp" />
        <div>
          <h2>Meu Whatsapp</h2>
          <p>
            Estou disponível para um bate-papo por voz, vamos falar sobre
            criatividade juntos?
          </p>
          <Link
            to={
              "https://api.whatsapp.com/send?phone=+5531972269558&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os"
            }
            target="_blank">
            Falar agora
          </Link>
        </div>
      </div>

      <div>
        <img src={email} alt="Logo email" />
        <div>
          <h2>Meu Email</h2>
          <p>Envie-me um e-mail relatando feedbacks, sugestões e ideias</p>
          <Link to="mailto:rogermferr@gmail.com">Enviar email</Link>
        </div>
      </div>

      <div>
        <img src={linkedin} alt="Logo LinkedIn" />
        <div>
          <h2>Meu LinkedIn</h2>
          <p>
            Podemos criar interações mais constantes assim como uma rede de
            compartilhamento
          </p>
          <Link to={"https://www.linkedin.com/in/rogermferr/"} target="_blank">
            Acesse o LinkedIn agora
          </Link>
        </div>
      </div>
    </ContactStyle>
  );
};

export default Contact;
