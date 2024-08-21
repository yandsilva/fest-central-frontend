import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        <h3 className="title-footer">Empresa Info</h3>
        <div className="text-footer">
          <p>Sobre</p>
          <p>Contatos</p>
          <p>Trabalhe Conosco</p>
          <p>FAQs</p>
          <p>Termos de Serviços</p>
          <p>Politica de Privacidade</p>
        </div>
      </div>

      <div className="footer-text">
        <h3 className="title-footer">Ajuda</h3>
        <div className="text-footer">
          <p>Suporte a Conta</p>
          <p>Lista de Eventos</p>
          <p>Ingresso para Eventos</p>
          <p>Termos e Condições de Compra de Ingressos</p>
        </div>
      </div>

      <div className="footer-text">
        <h3 className="title-footer">Categorias</h3>
        <div className="text-footer">
          <p>Concertos e Shows</p>
          <p>Festivais & Lifestyle</p>
          <p>Negócios & Networking</p>
          <p>Comida & Bebidas</p>
          <p>Artes Performáticas</p>
          <p>Esportes ao ar Livre</p>
          <p>Exposições</p>
          <p>Workshops, Conferencias & Aulas</p>
        </div>
      </div>

      <div className="footer-text">
        <h3 className="title-footer">Redes Sociais</h3>
        <div className="text-footer">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </div>

      <div className="footer-text">
        <h3 className="title-footer">Download The App</h3>
        <div className="text-footer">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>

      <hr />

      <span>2023 FestCentral. Todos o direitos reservados.</span>
    </div>
  );
}
