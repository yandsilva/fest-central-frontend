import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Events.css";
import { assets } from "../../assets/assets";
import EventsItem from "../../components/EventsItem/EventsItem";
import { Search } from "lucide-react";

export default function Events() {
  const { event_list, search, setSearch } = useContext(StoreContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterEvents, setFilterEvents] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let eventsCopy = event_list.slice();

    if (search) {
      eventsCopy = eventsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      eventsCopy = eventsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setFilterEvents(eventsCopy);
  };

  const sortEvent = () => {
    let feCopy = filterEvents.slice();

    switch (sortType) {
      case "low-high":
        setFilterEvents(feCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterEvents(feCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, search]);

  useEffect(() => {
    sortEvent();
  }, [sortType]);

  return (
    <>
      <div className="events-search">
        <Search color="#a5a5a5" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise eventos, categorias, localização."
        />
      </div>

      <div className="events">
        <div className="events-filters">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="events-filter"
          >
            FILTRO
            <img
              className={`dropdown-icon ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt=""
            />
          </p>
          <div className={`events-category ${showFilter ? "" : "hidden"}`}>
            <p className="category">CATEGORIA</p>
            <div className="events-menu">
              <p>
                <input
                  className="events-category-input"
                  type="checkbox"
                  value={"Entreterimento"}
                  onChange={toggleCategory}
                />
                Entreterimento
              </p>
              <p>
                <input
                  className="events-category-input"
                  type="checkbox"
                  value={"Educação & Negócios"}
                  onChange={toggleCategory}
                />
                Educação & Negócios
              </p>
              <p>
                <input
                  className="events-category-input"
                  type="checkbox"
                  value={"Culturas & Artes"}
                  onChange={toggleCategory}
                />
                Culturas & Artes
              </p>
              <p>
                <input
                  className="events-category-input"
                  type="checkbox"
                  value={"Esportes & Fitness"}
                  onChange={toggleCategory}
                />
                Esportes & Fitness
              </p>
              <p>
                <input
                  className="events-category-input"
                  type="checkbox"
                  value={"Tecnologias & Inovação"}
                  onChange={toggleCategory}
                />
                Tecnologias & Inovação
              </p>
              <p>
                <input
                  className="events-category-input"
                  type="checkbox"
                  value={"Viagens & Aventuras"}
                  onChange={toggleCategory}
                />
                Viagens & Aventuras
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="events-right-side">
          <div className="events-sort">
            <p>Tipo:</p>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="product-sort"
            >
              <option value="relavnet">Relevante</option>
              <option value="low-high">Preço: Menor - Maior</option>
              <option value="high-low">Preço: Maior - Menor</option>
            </select>
          </div>

          {/* Map Events */}
          <div className="events-maps">
            {filterEvents.map((item, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
