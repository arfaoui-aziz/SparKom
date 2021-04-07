import React from "react";
import Header from "../ProfileSettings/Header";
import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function MyProfile() {
  return (
    <div class="container">
      <div class="row">
        <Header />
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}
