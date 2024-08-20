import { assets } from "../../assets/assets";
import "./CreateEventHome.css";

export default function CreateEventHome() {
  return (
    <div className="create-event">
      <div className="create-event-col">
        <h3>Crie um evento com a FestCentral</h3>
        <p>
          Tem um show, evento, atividade ou uma ótima experiência?
          <br /> Seja nosso parceiro no FestCentral.
        </p>
      </div>
      <div className="create-event-btn">
        <button>
          <img className="date-icon" src={assets.plus_icon} alt="" />
          <p>Criar Evento</p>
        </button>
      </div>
    </div>
  );
}
