import React from "react";
import avatar from "../../assets/img/avatar10-sm.jpg";
import avatar3 from "../../assets/img/avatar24-sm.jpg";
import avatar4 from "../../assets/img/avatar36-sm.jpg";
import avatar2 from "../../assets/img/avatar38-sm.jpg";
import { Link } from "react-router-dom";

export default function FriendsList() {
  const friendIcon = (avatar) => {
    return (
      <li>
        <a href="#top">
          <img src={avatar} alt="author" />
        </a>
      </li>
    );
  };

  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Friends (86)</h6>
      </div>
      <div className="ui-block-content">
        <ul className="widget w-faved-page js-zoom-gallery">
          {friendIcon(avatar)}
          {friendIcon(avatar2)}
          {friendIcon(avatar3)}
          {friendIcon(avatar4)}
          {friendIcon(avatar)}
          {friendIcon(avatar2)}
          {friendIcon(avatar3)}
          {friendIcon(avatar4)}
          {friendIcon(avatar)}
          <li className="all-users">
            <Link to="/me/friends">+74</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
