import React from "react";
import Header from "../Header";
import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
import Section5 from "../Section5";
import Section6 from "../Section6";
import Section7 from "../Section7";
import Section8 from "../Section8";
import Section9 from "../Section9";
import MarketResearch from "../MarketResearch";
import Footer from "../Footer";
import Compare from "../Compare";
import Map from "../Map";
import Documents from "../Documents";
import RoadMap from "../Roadmap";
import Team from "../Team";

const Body = props => {
	console.log('TCL: props', props)
  // if 
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Compare />
      <Map />
      <RoadMap />
      <Team />
      <Documents />
      <Footer />
    </div>
  );
};

export default Body;
