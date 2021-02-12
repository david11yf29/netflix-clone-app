import React from "react";
import "./HomeScreen.css";

import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import Requests from "./Requests";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
      />
      <Row />
    </div>
  );
};

export default HomeScreen;
