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
          <div className="login-container-2">
            <div className="login-email">
              <p>Endereço de email</p>
              <input type="text" placeholder="Digite seu e-mail" />
            </div>
            <div className="login-senha">
              <p>Senha</p>
              <input type="password" placeholder="Digite sua senha" />
            </div>
            <button className="login-button">Login</button>
          </div>
          <div className="criar-conta">
            <p>Não tem uma conta?</p>
            <button>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
