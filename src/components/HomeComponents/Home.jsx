import React, { useState, useEffect, useRef } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";
import PopularShows from "./PopularShows";
import NewReleases from "./NewReleases";
import TopRated from "./TopRated";
import TVShows from "./TVShows";
import Movies from "./Movies";
import WebSeries from "./WebSeries";

function Home() {
  const components = [
    { component: <PopularShows key="PopularShows" />, name: "PopularShows" },
    { component: <NewReleases key="NewReleases" />, name: "NewReleases" },
    { component: <TopRated key="TopRated" />, name: "TopRated" },
    { component: <TVShows key="TV" />, name: "TVShows" },
    { component: <Movies key="movies" />, name: "movies" },
    { component: <WebSeries key="WebSeries" />, name: "WebSeries" },
  ];

  return (
    <div className="homeContainer flex h-fit w-screen justify-start bg-black">
      <div className="leftDiv box-border fixed top-0 left-0 z-50">
        <Navbar />
      </div>

      <div className="rightDiv box-border ml-80 w-3/4 h-fit flex flex-col justify-start gap-0 z-0">
        <div className="posterDiv p-4 bg-gradient-to-l from-yellow-200 mt-8">
          <img
            src="/images/common/p3.jpg"
            alt="poster image"
            className="text-slate-50 mt-0 w-full h-96"
          />
        </div>
        {components.map((componentObj, index) => (
          <div
            key={index}
            className="contentDiv box-border w-full flex flex-col gap-2 mt-8"
          >
            {componentObj.component}
          </div>
        ))}

        <div className="footerDiv box-border w-full h-fit mt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;