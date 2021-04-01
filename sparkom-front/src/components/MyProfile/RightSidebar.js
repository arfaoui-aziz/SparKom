import React from "react";
import FriendsList from "./FriendsList";

export default function RightSidebar() {
  return (
    <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
      <FriendsList />
    </div>
  );
}
