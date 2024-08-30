import { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={assets.ticket_logo} alt="" />
        <h1>FestCental</h1>
      </Link>
      <ul className={`navbar-menu ${isOpen && "open"}`}>
        <NavLink onClick={() => setIsOpen(false)} className="menu" to="/">
          <p>Inicio</p>
          <hr />
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)} className="menu" to="/events">
          <p>Eventos</p>
          <hr />
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)} className="menu" to="/about">
          <p>Sobre</p>
          <hr />
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          className="menu"
          to="/contact"
        >
          <p>Contato</p>
          <hr />
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          className="nosy-menu"
          to="/create-event"
        >
          <p>Criar Evento</p>
        </NavLink>
      </ul>
      <div className="navbar-login-event-login-sign">
        <Link to="/create-event">
          <p>Criar Evento</p>
        </Link>
        <div className="navbar-login-sign">
          <Link to="/">
            <p>Login</p>
          </Link>
          <Link className="navbar-sign" to="/">
            <p>Sign Up</p>
          </Link>
        </div>
      </div>
      <Link className="profile-mobile" to="/">
        <img src={assets.profile_mobile} alt="" />
      </Link>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}
