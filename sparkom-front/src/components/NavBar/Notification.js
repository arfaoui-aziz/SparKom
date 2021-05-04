import React from "react";
import profilePic from "../../assets/img/avatar1.jpg";
import icons from "../../assets/svg-icons/sprites/icons.svg";
export default function Notification({
  userAvatar,
  userName,
  description,
  date,
  notifImg,
  comment,
}) {
  return (
    <li className={notifImg ? "with-comment-photo" : ""}>
      <div className="author-thumb">
        <img src={userAvatar} style={{ width: 34, height: 34 }} alt="author" />
      </div>
      <div className="notification-event">
        <a href="#" className="h6 notification-friend">
          {userName}
        </a>{" "}
        {description}
        <span className="notification-date">
          <time className="entry-date updated" dateTime="2004-07-24T18:18">
            {date}
          </time>
        </span>
      </div>
      <span className="notification-icon mynotif">
        <svg className="olymp-little-delete">
          <use xlinkHref={`${icons}#olymp-little-delete`} />
        </svg>
      </span>
      {notifImg && (
        <div className="comment-photo">
          <img src={notifImg} alt="photo" />
          <span>{comment}</span>
        </div>
      )}
    </li>
  );
}
