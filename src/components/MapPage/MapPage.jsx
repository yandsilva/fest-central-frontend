import Iframe from "react-iframe";
import { assets } from "../../assets/assets";
import "./MapPage.css";

export default function MapPage() {
  return (
    <div className="map-page">
      <span>Localização</span>
      <div className="map-page-location">
        <img className="location-icon" src={assets.location_icon} alt="" />
        <p>Endereço</p>
      </div>
      <div>
        <Iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.8704361927726!2d-49.0710368240145!3d-22.320739279671855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67bbd5354fe1%3A0x696e1315626228ba!2sSenac%20Bauru!5e0!3m2!1spt-BR!2sbr!4v1723750315505!5m2!1spt-BR!2sbr"
          width="400"
          height="250"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Iframe>
      </div>
    </div>
  );
}
