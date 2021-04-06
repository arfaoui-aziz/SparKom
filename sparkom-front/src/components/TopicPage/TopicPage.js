import React from "react";
import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function TopicPage() {
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
