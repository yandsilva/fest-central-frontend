import "./MapPage.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function MapPage() {
  const API_KEY = "AIzaSyD975PsTAdXVFbFKoqFTPjRW7wAK_2FhLg";

  return (
    <div className="map-page">
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={{ lat: -22.3207132266786, lng: -49.06847263304444 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  );
}
