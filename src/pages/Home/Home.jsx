import { useState } from "react";
import EventsDisplay from "../../components/EventsDisplay/EventsDisplay";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Recommendations from "../../components/Recommendations/Recommendations";
import "./Home.css";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import BestEvent from "../../components/BestEvents/BestEvent";

export default function Home() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <div className="home">
        <ExploreMenu category={category} setCategory={setCategory} />
        <EventsDisplay category={category} />
        <Recommendations />
        <BestEvent category={category} />
      </div>
      <NewsLetter />
    </>
  );
}
