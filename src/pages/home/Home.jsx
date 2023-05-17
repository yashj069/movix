import React from "react";
import Trending from "./trending/Trending";
import HeroBanner from "./HeroBanner/HeroBanner";
import Popular from "../popular/Popular";
import TopRated from "../topRated/TopRated";

const Home = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
