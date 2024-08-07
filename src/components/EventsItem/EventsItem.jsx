import React from "react";
import "./EventsItem.css";

export default function EventsItem({ id, title, price, image, local, time }) {
  return (
    <div className="event-item">
      <div className="event-item-img-container">
        <img className="event-item-img" src={image} alt="" />
      </div>
      <div className="event-content-description">
        <div className="event-data">
          <p>nov</p>
          <p>22</p>
        </div>
        <div className="event-description">
          <p>{title}</p>
          <p>{local}</p>
          <p>{time}</p>
          <div className="event-price-rating-starts"></div>
        </div>
      </div>
    </div>
  );
}
