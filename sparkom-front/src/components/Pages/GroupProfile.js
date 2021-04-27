import React from "react";
import Header from "../Group/Header";
import HeaderG from "../Group/HeaderG";
import Feed from "../Group/Feed";
import LeftSidebar from "../Group/LeftSidebar";
import RightSidebar from "../Group/RightSidebar";
import NavBar from "../../components/NavBar/NavBar";
export default function MyProfile() {
  return (
    <div class="container">
      <div class="row">
      <NavBar />
      <div class="header-spacer header-spacer-small mb-3"></div> 
        <HeaderG/>
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}
