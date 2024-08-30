import React from "react";
import { useState } from "react";
import upload from "../../assets/upload_area.png";
import { Link } from "react-router-dom";
import "./CreateEvent2.css";

export default function CreateEvent2() {
  const [image, setImage] = useState(false);

  return (
    <div className="create-event2">
      <div className="create-event2-info">
        <h1>Titulo do Evento</h1>
        <p>Localização</p>
        <p>Hora</p>
      </div>
      <div className="create-event2-upload">
        <span>Upload Image</span>
        {/* <label className="create-event2-image" htmlFor="image">
          <img src={upload} alt="" />
        </label> */}
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          required
        />
        <p>
          A imagem de destaque deve ter pelo menos 1170 pixels de largura por
          504 pixels de altura.
        </p>
        <p>Formatos de arquivo válidos: JPG, GIF, PNG.</p>
      </div>
      <div className="create-event2-btn">
        <Link to="/create-event" className="back-btn">
          Volte para Editar Evento
        </Link>
        <Link to="/create-event3" className="next-btn">
          Salva & Continuar
        </Link>
      </div>
    </div>
  );
}
