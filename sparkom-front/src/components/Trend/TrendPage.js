import React from "react";
import Feed from "./Feed";
import LeftSidebar from "../Home/LeftSidebar";
import RightSidebar from "../Home/RightSidebar";

export default function Home() {
  return (
    <div class="container">
      <div class="row">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}
