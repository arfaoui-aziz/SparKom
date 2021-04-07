import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../ProfileSettings/Header";
import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function MyProfile() {
  return (
    <>
      <NavBar />
      <div class="header-spacer header-spacer-small mb-3"></div>
      <div class="container">
        <div class="row">
          <Header />
          <LeftSidebar />
          <Feed />
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
