import React from "react";
import profilePic from "../../assets/img/avatar1.jpg";
export default function Notification() {
  return (
    <li>
      <div className="author-thumb">
        <img src={profilePic} style={{ width: 34, height: 34 }} alt="author" />
      </div>
      <div className="notification-event">
        <div>
          <a href="#" className="h6 notification-friend">
            Mathilda Brinker
          </a>{" "}
          commented on your new{" "}
          <a href="#" className="notification-link">
            profile status
          </a>
          .
        </div>
        <span className="notification-date">
          <time className="entry-date updated" dateTime="2004-07-24T18:18">
            4 hours ago
          </time>
        </span>
      </div>
    </li>
  );
}
