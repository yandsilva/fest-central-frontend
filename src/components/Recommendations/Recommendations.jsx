import React from "react";
import { assets } from "../../assets/assets";
import "./Recommendations.css";

export default function Recommendations() {
  return (
    <div className="recommendations">
      <h3>Eventos especialmente selecionados para você!</h3>
      <p>
        Receba sugestões de eventos adaptadas aos seus interesses! Não deixe
        seus eventos favoritos escaparem.
      </p>
      <div className="recommendations-btn">
        <button>
          <p>Começar Agora</p>
          <img className="btn-arrow" src={assets.arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
}
