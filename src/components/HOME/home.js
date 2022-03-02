import React from "react";
import classes from "./home.module.css";
import Popular from "../movietype/Popular";
import Toprated from "../movietype/toprated";
import Upcomming from "../movietype/Upcomming";

const Home = () => {
  return (
    <div className={classes.home}>
      <Popular />
      <Upcomming />
      <Toprated />
    </div>
  );
};

export default Home;
