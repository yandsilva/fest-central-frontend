import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import EventsItem from "../EventsItem/EventsItem";
import { useState } from "react";
import { useEffect } from "react";
import "./BestEvent.css";

export default function BestEvent({ category }) {
  const { event_list } = useContext(StoreContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = event_list;
    setBestSeller(bestProduct.slice(0, 6));
  }, []);

  return (
    <div className="events-display">
      <h2>Melhores Eventos</h2>
      <div className="events-filter">
        <button>Hoje</button>
        <button>Amanhã</button>
        <button>Essa Semana</button>
        <button>Final de semana</button>
        <button>Gratís</button>
      </div>
      <div className="events-display-list">
        {bestSeller.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <EventsItem
                key={index}
                id={item._id}
                title={item.name}
                price={item.price}
                image={item.image}
                local={item.local}
                time={item.time}
                rating={item.rating}
              />
            );
          }
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
