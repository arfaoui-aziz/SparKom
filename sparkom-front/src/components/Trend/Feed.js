import React from "react";
import PostText from "../Home/PostText";
import PostPhoto from "../Home/PostPhoto";
import PostVideo from "../Home/PostVideo";
import TrendBar from "./TrendBar";

export default function Feed() {
  return (
    <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
      <div id="newsfeed-items-grid">
        <TrendBar/>
        <PostText />
        <PostPhoto />
        <PostVideo />
      </div>
    </div>
  );
}
