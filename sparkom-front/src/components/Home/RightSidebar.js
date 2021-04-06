import React from "react";
import FriendSuggestion from "./FriendSuggestion";
import Trends from "./Trends";
import JobWidgets from "./JobWidgets";

export default function RightSidebar() {
  return (
    <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
      <Trends />
      <JobWidgets />
      <FriendSuggestion />
      
    </div>
  );
}
