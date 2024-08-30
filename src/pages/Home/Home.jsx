import { useState } from "react";
import CreateEventHome from "../../components/CreateEventHome/CreateEventHome";
import EventsDisplay from "../../components/EventsDisplay/EventsDisplay";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Recommendations from "../../components/Recommendations/Recommendations";
import "./Home.css";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import BannerTopoSite from "../../components/HeaderMenu/BannerTopoSite";

export default function Home() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <BannerTopoSite />
      <div className="home">
        <ExploreMenu category={category} setCategory={setCategory} />
        <EventsDisplay category={category} />
        <Recommendations />
        <EventsDisplay category={category} />
      </div>
      <CreateEventHome />
      <NewsLetter />
    </>
  );
}
