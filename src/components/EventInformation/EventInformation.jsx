import "./EventInformation.css";
import { assets } from "../../assets/assets";
import MapPage from "../MapPage/MapPage";

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
          <div className="event-information-date-time">
            <span>Data e Hora</span>
            <div className="date-time">
              <img src={assets.date_icon} alt="" />
              <p>Data</p>
            </div>
            <div className="date-time">
              <img src={assets.time_icon} alt="" />
              <p>Horário</p>
            </div>
          </div>
          <div className="ticket">
            <button className="btn-ticket" type="submit">
              <img src={assets.buy_ticket} alt="" />
              <p>Comprar Tickets</p>
            </button>
          </div>
        </div>
      </div>
      <MapPage />
    </div>
  );
}
