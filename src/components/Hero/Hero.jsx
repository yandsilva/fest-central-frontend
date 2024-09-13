import { Search, MapPin, ChevronDown } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <h2 className="hero-text">
        Explore os <span>eventos vibrantes</span> que acontecem local e pelo
        País.
      </h2>
      <div className="hero-content">
        <div className="hero-search">
          <Search color="#a5a5a5" />
          <input
            type="text"
            placeholder="Pesquise eventos, categorias, localização."
          />
        </div>
        <div className="hero-map-pin">
          <MapPin color="#a5a5a5" />
          <input type="text" placeholder="Bauru" />
          <ChevronDown cursor="pointer" color="#a5a5a5" />
        </div>
      </div>
    </div>
  );
}
