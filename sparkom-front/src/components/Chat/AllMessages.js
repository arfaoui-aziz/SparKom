import React from "react";
import Messages from "../NavBar/Messages";
import Header from "../ProfileSettings/Header";
import Conversation from "./Conversation";

export default function AllMessages() {
  return (
    <div class="container">
      <div class="row">
        <Header />
        <div className="col col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">Chat / Messages</h6>
            </div>
          </div>
        </div>
        {/**/}
        <div className="col col-xl-3  col-lg-4  col-md-12 col-sm-12  padding-r-0">
          <ul className="notification-list chat-message">
            <a href="#">
              <Messages />
            </a>
            <Messages />
          </ul>
        </div>

        {/**/}

        <div className="col col-xl-9  col-lg-8  col-md-12 col-sm-12 ">
          <Conversation />
        </div>

        {/**/}
      </div>
    </div>
  );
}
