import React from "react";
import "./CreateEvent3.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function CreateEvent3() {
  return (
    <div className="create-event3">
      <div className="create-event3-info">
        <h1>Título do evento</h1>
        <p>Localização</p>
        <p>Hora</p>
      </div>
      <div className="create-event3-ticket">
        <p>Que tipo de evento você está realizando?</p>
        <div className="create-event3-input">
          <div className="event3-input">
            <img src={assets.ticket_pay} alt="" />
            <span>Evento com ingressos</span>
            <p>Meu evento exige ingressos para entrada</p>
          </div>
          <div className="event3-input">
            <img src={assets.ticket_free} alt="" />
            <span>Evento com ingressos</span>
            <p>Meu evento exige ingressos para entrada</p>
          </div>
        </div>
      </div>
      <div className="create-event3-name-price">
        <p>Quais ingressos você está vendendo?</p>
        <div className="create-event3-content">
          <div className="create-event3-name">
            <p>Nome do bilhete</p>
            <input
              type="text"
              placeholder="Nome do bilhete, por ex. Admissão Geral"
            />
          </div>
          <div className="create-event3-price">
            <p>Preço do ingresso</p>
            <input type="text" placeholder="R$ 0,00" />
          </div>
        </div>
      </div>
      <div className="create-event3-btn">
        <Link to="/" className="back-btn">
          Voltar
        </Link>
        <Link to="/" className="next-btn">
          Salvar & Continuar
        </Link>
      </div>
    </div>
  );
}
