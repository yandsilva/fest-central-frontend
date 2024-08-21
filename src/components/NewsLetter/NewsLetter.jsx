import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="news-letter">
      <div className="news-letter-text">
        <h3>Receba noticias sobre eventos</h3>
        <p>
          Receba noticias semanais e atualizações com novos eventos de <br />
          seus organizadores e locais favoritos.
        </p>
      </div>
      <div className="btn-newsletter">
        <input
          type="email"
          className="input-email"
          placeholder="Digite seu endereço de Email"
        />
        <button className="button-inscreva-se">Inscreva-se</button>
      </div>
    </div>
  );
}
