// import { useContext } from "react";
// import EventsItem from "../EventsItem/EventsItem";
// import { StoreContext } from "../../context/StoreContext";
import "./EventsDisplay.css";

export default function EventsDisplay() {
  // const { event_list } = useContext(StoreContext);

  return (
    <div className="events-display">
      <h2>Eventos Populares em Bauru</h2>
      <div className="events-display-list"></div>
    </div>
  );
}
