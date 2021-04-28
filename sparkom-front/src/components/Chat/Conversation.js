import React, { useRef, useEffect } from "react";

import profilePic from "../../assets/img/avatar1.jpg";
import MyMsg from "./MyMsg";
import SenderMsg from "./SenderMsg";
export default function Conversation() {
  return (
    <div className="px-4 py-5 chat-box bg-white">
      {/* Chat Box*/}
      {/* Sender Message*/}
      <SenderMsg />
      <SenderMsg />
      {/* Reciever Message*/}
      <MyMsg />

      {/* Typing area */}
      <form className="bg-light">
        <div className="input-group" style={{ height: 20 }}>
          <input
            type="text"
            placeholder="Type a message"
            aria-describedby="button-addon2"
            className="form-control rounded-0 border-0 py-4 bg-light"
          />
          <div className="input-group-append" style={{ height: 62 }}>
            <button
              id="button-addon2"
              type="submit"
              className="btn btn-link bg-primary"
            >
              <i className="fa fa-paper-plane" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
