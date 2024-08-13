import "./EventsDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import EventsItem from "../EventsItem/EventsItem";

export default function EventsDisplay() {
  const { event_list } = useContext(StoreContext);
  return (
    <div className="events-display">
      <h2>Eventos Populares em Bauru</h2>
      <div className="events-filter">
        <button>Hoje</button>
        <button>Amanhã</button>
        <button>Essa Semana</button>
        <button>Final de semana</button>
        <button>Gratís</button>
      </div>
      <div className="events-display-list">
        {event_list.map((item, index) => {
          return (
            <EventsItem
              key={index}
              id={item._id}
              title={item.title}
              price={item.price}
              image={item.image}
              local={item.local}
              time={item.time}
              rating={item.rating}
            />
          );
        })}
      </div>
      <div className="event-btn">
        <button className="btn" type="submit">
          Veja mais
        </button>
      </div>
    </div>
  );
}
