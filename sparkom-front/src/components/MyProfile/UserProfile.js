import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../ProfileSettings/Header";
import Feed from "./Feed";
import MyBio from "./MyBio";
import UserProfileCard from "./UserProfileCard";

export default function UserProfile() {
  return (
    <>
      <NavBar />
      <div class="header-spacer header-spacer-small mb-3"></div>
      <div class="container">
        <div class="row">
          <Header />
          <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-12 ">
            <UserProfileCard />
          </div>
          <Feed />
          <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
            <MyBio />
          </div>
        </div>
      </div>
    </>
  );
}
