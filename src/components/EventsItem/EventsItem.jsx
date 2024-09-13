import { useState } from "react";
import { assets } from "../../assets/assets.js";
import { Star } from "lucide-react";
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
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="event-item">
      <div className="event-item-img-container">
        <div onClick={() => setFavorite(!favorite)}>
          {favorite ? (
            <img
              className="favorite-icon"
              src={assets.favorite_icon_2}
              alt=""
            />
          ) : (
            <img
              className="favorite-icon"
              src={assets.favorite_icon_1}
              alt=""
            />
          )}
        </div>

        <img className="event-item-img" src={image} alt="" />
      </div>

      <a href={`/cart/${id}`} className="event-content-description">
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
            <div className="event-star-icon">
              <Star width="15px" />
              <p>{rating} Interessados</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
