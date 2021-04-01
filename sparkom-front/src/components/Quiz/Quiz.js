import React from "react";

import Header from "../ProfileSettings/Header";
import LeftSidebar from "../MyProfile/LeftSidebar";
import RightSidebar from "../MyProfile/RightSidebar";
import Questions from "./Questions";

export default function Quiz() {
  return (
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
  );
}
