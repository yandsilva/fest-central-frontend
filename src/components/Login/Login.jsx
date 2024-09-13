import React from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  email: z.string().email("Por favor, coloque um E-mail"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caractere"),
});

const asyncFunction = async () => {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 3000);
  });

  return myPromise;
};

export default function Login() {
  const { register, handleSubmit, formState } = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  const { errors, isSubmitting } = formState;

  console.log("errors", errors);
  console.log("isSubmitting", isSubmitting);

  const handleSubmitForm = async (data) => {
    console.log("submit", data);

    await asyncFunction();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="login">
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
              <input
                {...register("email")}
                type="text"
                placeholder="Digite seu e-mail"
              />
            </div>

            {errors.email && <p>{errors.email.message}</p>}

            <div className="login-senha">
              <p>Senha</p>
              <input
                {...register("password")}
                type="password"
                placeholder="Digite sua senha"
              />
            </div>

            {errors.password && <p>{errors.password.message}</p>}

            <button disabled={isSubmitting} className="login-button">
              {isSubmitting ? "Logando..." : "Login"}
            </button>
          </div>
          <div className="criar-conta">
            <p>Não tem uma conta?</p>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </form>
  );
}
