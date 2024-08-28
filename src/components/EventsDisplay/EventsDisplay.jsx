import "./EventsDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import EventsItem from "../EventsItem/EventsItem";
import { useState } from "react";
import { useEffect } from "react";

export default function EventsDisplay({ category }) {
  const { event_list } = useContext(StoreContext);
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(event_list.slice(0, 6))
  },[])

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
        {latestProducts.map((item, index) => {
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
