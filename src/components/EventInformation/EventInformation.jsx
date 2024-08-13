import "./EventInformation.css";
import { assets } from "../../assets/assets";

export default function EventInformation() {
  return (
    <div className="event-information">
      <img className="event-information-image" src={assets.hero} alt="" />
      <div className="event-information-container">
        <div className="event-information-main">
          <h1>Título do Evento</h1>
          <div className="favorite-share">
            <img src={assets.star_favorite} alt="" />
            <img src={assets.share_icon} alt="" />
          </div>
        </div>
        <div className="event-information-date-buy">
          <div className="date-time">
            <h3>Data e Hora</h3>
            <p>
              <img src={assets.date_icon} alt="" />
              Data
            </p>
            <p>
              <img src={assets.time_icon} alt="" />
              Horário
            </p>
          </div>
          <div className="ticket">
            <button className="btn-ticket" type="submit">
              <img src={assets.buy_ticket} alt="" />
              Comprar Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
