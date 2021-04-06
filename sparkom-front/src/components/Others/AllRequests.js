import React from "react";
import FriendRequest from "../NavBar/FriendRequest";
import Pagination from "../Pagination";
import Header from "../ProfileSettings/Header";
import SideBar from "../ProfileSettings/SideBar";

export default function AllRequests() {
  return (
    <div className="container">
      <div className="row">
        <Header />
        <SideBar />
        <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">Friend Requests</h6>
            </div>

            <ul className="notification-list friend-requests">
              <FriendRequest />
            </ul>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
