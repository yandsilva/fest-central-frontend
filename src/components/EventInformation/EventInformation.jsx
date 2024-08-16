import "./EventInformation.css";
import { assets } from "../../assets/assets";
import MapPage from "../MapPage/MapPage";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

export default function EventInformation() {
  const { event_list } = useContext(StoreContext);

  console.log(event_list);

  return (
    <div className="event-information">
      {event_list.map((item, index) => {
        if (event_list[item._id]) {
          return (
            <div key={index}>
              <img
                className="event-information-image"
                src={assets.hero}
                alt=""
              />
              <div className="event-information-container">
                <div className="event-information-main">
                  <h1>{item.name}</h1>
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
              <div className="ticket-information">
                <span>Informações sobre o ingresso</span>
                <div className="ticket-type">
                  <img src={assets.buy_ticket} alt="" />
                  <p>Tipo de ingresso: Preço / ingresso</p>
                </div>
              </div>
              <div className="hospedado">
                <span>Hospedado por</span>
                <div className="host-profile">
                  <img src={assets.host_profile} alt="" />
                  <div className="contact">
                    <p>Nome do anfitrião</p>
                    <div className="btn-contact">
                      <button className="btn-white">Contato</button>
                      <button className="btn-blue">+ Follow</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-info">
                <span>Descrição do Evento</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Eget vulputate sociis
                  sit urna sit aliquet. Vivamus facilisis diam libero dolor
                  volutpat diam eu. Quis a id posuere etiam at enim vivamus.
                  Urna nisi malesuada libero enim ornare in viverra. Nibh
                  commodo quis tellus aliquet nibh tristique lobortis id.
                  Consequat ultricies vulputate turpis neque viverra tempor
                  nunc. Et amet massa tellus consequat mauris imperdiet tellus.
                  Praesent risus magna nisl turpis egestas ultrices viverra
                  pellentesque blandit. Rutrum consequat eu penatibus ipsum at.
                  Vestibulum a pharetra facilisis varius proin ultricies tellus.
                  Ac viverra pharetra sit elementum magna nullam ornare in a.
                  Egestas velit id nisi a. Elementum eget vulputate dignissim
                  urna sed tellus felis. Tellus in et sed mattis morbi velit
                  massa donec. Pharetra congue ut posuere etiam ac arcu vel.
                  Vitae venenatis ipsum sed non non nibh cursus. Viverra mauris
                  nunc proin bibendum risus quis aliquet et est. Vel etiam nunc
                  quis ullamcorper nulla velit arcu. Volutpat interdum fermentum
                  est tellus amet scelerisque sit. Est tellus neque nisl dictum
                  et cras et. Nunc ullamcorper imperdiet ut adipiscing
                  pellentesque ullamcorper. Mauris sit consectetur mi quisque in
                  fermentum non urna. Cras tortor elementum arcu risus faucibus
                  odio amet. Ac molestie laoreet et integer molestie. Aliquam
                  volutpat egestas convallis sit erat. Viverra nulla tellus a
                  pulvinar. Fermentum vitae sit phasellus tellus ut nulla
                  volutpat risus. Laoreet condimentum sodales mauris feugiat.
                  Diam sit ultrices integer sodales quam eget nullam id euismod.
                  Vivamus iaculis quis tristique pulvinar consectetur arcu.
                  Elementum venenatis suspendisse cursus nisl. Amet quis lacus
                  tortor odio purus arcu. Molestie libero aliquam magnis at cras
                  amet amet massa elementum. Et tincidunt semper tellus erat sit
                  leo molestie. Diam eu libero curabitur lectus tellus. Facilisi
                  morbi enim leo purus adipiscing. Varius euismod adipiscing
                  fermentum ac pretium. Diam ultricies aenean viverra sed odio
                  turpis netus. Pellentesque ridiculus ornare a sed. Commodo eu
                  blandit id auctor non non eu. At quis cursus in libero neque
                  facilisis id. Scelerisque in faucibus arcu neque scelerisque.
                  Malesuada euismod montes tempus purus sed tristique vestibulum
                  eget. Arcu integer purus tincidunt vulputate cras. Id aliquet
                  dolor quis ultrices. Turpis amet donec odio odio tincidunt
                  convallis placerat. Eget sodales in tincidunt fringilla nibh
                  urna cum.
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
