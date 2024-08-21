import React from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

export default function Login() {
  return (
    <div className="login">
      <div className="escrita">
        <img src="" alt="" />

        <h3>FestCentral</h3>

        <p>
          Descubra eventos <br />
          personalizados. <br />
          Inscreva-se para receber
          <br />
          recomendações personalizadas hoje mesmo!
        </p>
      </div>

      <div className="login-filho">
        <div className="login-container">
          <div className="login-style">
            <h3>Login</h3>
          </div>
          <div className="login-logado">
            <div className="rede-social">
              <img src={assets.google_play} alt="" />
              <span>Faça login com o Google</span>
            </div>
            <div className="rede-social">
              <img src={assets.facebook_icon} alt="" />
              <span>Entrar com o Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
