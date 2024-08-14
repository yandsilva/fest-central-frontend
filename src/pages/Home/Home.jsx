import { useState } from "react";
import EventsDisplay from "../../components/EventsDisplay/EventsDisplay";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

export default function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <EventsDisplay category={category} />
    </div>
  );
}
