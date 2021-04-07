import React from "react";

import Header from "../ProfileSettings/Header";
import LeftSidebar from "../MyProfile/LeftSidebar";
import RightSidebar from "../MyProfile/RightSidebar";
import Questions from "./Questions";
import NavBar from "../NavBar/NavBar";

export default function Quiz() {
  return (
    <>
      <NavBar />
      <div class="header-spacer header-spacer-small mb-3"></div>
      <div className="container">
        <div className="row">
          {/* Header */}
          <Header />
          {/* App Body */}

          <LeftSidebar />

          {/* Feed */}
          <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <Questions />
          </div>
          {/* Widgets */}
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
