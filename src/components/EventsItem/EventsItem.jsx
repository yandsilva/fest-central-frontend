import { Link } from "react-router-dom";
import "./EventsItem.css";

export default function EventsItem({
  id,
  title,
  price,
  image,
  local,
  time,
  rating,
}) {
  return (
    <Link to={`/cart/${id}`} className="event-item">
      <div className="event-item-img-container">
        <img className="event-item-img" src={image} alt="" />
      </div>
      <div className="event-content-description">
        <div className="event-data">
          <p className="event-data-month">NOV</p>
          <p className="event-data-day">22</p>
        </div>
        <div className="event-description">
          <span className="event-description-title">{title}</span>
          <p className="event-description-local">{local}</p>
          <p className="event-description-time">{time}</p>
          <div className="event-price-rating-starts">
            <p>R${price}</p>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
