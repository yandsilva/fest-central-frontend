import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

import "./HeaderMenu2.css";

export default function HeaderMenu2() {
  return (
    <div>
      <div className="topoLinks1">
        <picture>
          <source
            media="(min-width: 750px)"
            srcSet={assets.logotipo_topo}
            className="ticketprincipal"
          />
          <source
            media="(min-width: 350px)"
            srcSet={assets.mobileticket}
            className="ticketmobile"
          />
          <img src={assets.mobileticket} className="ticketprincipal"></img>
        </picture>
      </div>
      <div className="topoLinks2">
        <Link to="/" className="linkunit">
          Início
        </Link>
        <Link to="/" className="linkunit">
          Eventos
        </Link>
        <Link to="/" className="linkunit">
          Sobre
        </Link>
        <Link to="/" className="linkunit">
          Contato
        </Link>
      </div>
      <div className="topoLinks3">
        <Link to="/" className="linkunit">
          Criar Evento
        </Link>
        <Link to="/" className="linkunit">
          Login
        </Link>
        <Link to="/" className="botsubmit">
          SignUP
        </Link>
      </div>
    </div>
  );
}
