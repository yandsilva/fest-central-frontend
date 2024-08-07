import "./EventsDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import EventsItem from "../EventsItem/EventsItem";

export default function EventsDisplay() {
  const { event_list } = useContext(StoreContext);
  return (
    <div className="events-display">
      <h2>Eventos Populares em Bauru</h2>
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
            />
          );
        })}
      </div>
    </div>
  );
}
