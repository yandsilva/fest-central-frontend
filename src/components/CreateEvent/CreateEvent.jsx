import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./CreateEvent.css";

export default function CreateEvent() {
  const [eventType, setEventType] = useState("single");

  return (
    <form className="create-event-form">
      <h1>Criar novo evento</h1>
      <div className="create-event-details">
        <h3>Detalhes do evento</h3>
        <div className="event-datails">
          <div className="create-event-datails-title">
            <label>Título do evento:</label>
            <input type="text" placeholder="Digite o nome do evento" />
          </div>
          <div className="create-event-category">
            <label>Categoria do evento:</label>
            <select>
              <option value="">Entretenimento</option>
              <option value="">Educação & Negócios</option>
              <option value="">Culturas & Artes</option>
              <option value="">Esportes & Fitness</option>
              <option value="">Tecnologias & Inovação</option>
              <option value="">Viagens & Aventuras</option>
            </select>
          </div>
        </div>
      </div>

      <div className="create-event-date-time">
        <h3>Data & Hora</h3>
        <div className="create-event-type">
          <label>Tipo de evento:</label>
          <div className="create-event-input">
            <input
              type="radio"
              value="single"
              checked={eventType === "single"}
              onChange={() => setEventType("single")}
            />
            <p>Evento Único</p>
          </div>
          <div className="create-event-input">
            <input
              type="radio"
              value="recurring"
              checked={eventType === "recurring"}
              onChange={() => setEventType("recurring")}
            />
            <p>Evento Recorrente</p>
          </div>
        </div>
        <div className="create-event-session">
          <label>Sessão:</label>
          <div className="event-date-time">
            <div className="event-time-data">
              <p>Data de início</p>
              <input type="date" name="" id="" />
            </div>
            <div className="event-time-data">
              <p>Hora de início</p>
              <input type="time" name="" id="" />
            </div>
            <div className="event-time-data">
              <p>Hora de término</p>
              <input type="time" name="" id="" />
            </div>
          </div>
        </div>
      </div>

      <div className="create-event-location">
        <h3>Localização</h3>
        <div className="event-location">
          <label>Local do evento:</label>
          <div className="event-location-input">
            <input type="text" placeholder="Estado" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Endereço" />
          </div>
        </div>
      </div>

      <div className="create-event-info-details">
        <h3>Informações adicionais</h3>
        <div className="event-info-details">
          <label>Descrição do evento:</label>
          <textarea
            type="text"
            placeholder="Descreva o que há de especial no seu evento e outros detalhes importantes."
          ></textarea>
        </div>
      </div>
      <div className="create-event-button">
        <button>Salvar & Continuar</button>
      </div>
    </form>
  );
}
