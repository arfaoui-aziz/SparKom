import React from "react";
import pdf from "../../assets/img/avatar49-sm.jpg";
import pdf1 from "../../assets/img/avatar9-sm.jpg";
export default function ActivityFeed() {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Activity Feed</h6>
        <a href="." className="more">
          <svg className="olymp-three-dots-icon">
            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
          </svg>
        </a>
      </div>
      {/* W-Activity-Feed */}
      <ul className="widget w-activity-feed notification-list">
        <li>
          <div className="author-thumb">
            <img src={pdf} alt="author" />
          </div>
          <div className="notification-event">
            <a href="." className="h6 notification-friend">
              Marina Polson
            </a>{" "}
            commented on Jason Mark’s{" "}
            <a href="." className="notification-link">
              photo.
            </a>
            .
            <span className="notification-date">
              <time className="entry-date updated" dateTime="2004-07-24T18:18">
                2 mins ago
              </time>
            </span>
          </div>
        </li>
        <li>
          <div className="author-thumb">
            <img src={pdf1} alt="author" />
          </div>
          <div className="notification-event">
            <a href="." className="h6 notification-friend">
              Jake Parker{" "}
            </a>{" "}
            liked Nicholas Grissom’s{" "}
            <a href="." className="notification-link">
              status update.
            </a>
            .
            <span className="notification-date">
              <time className="entry-date updated" dateTime="2004-07-24T18:18">
                5 mins ago
              </time>
            </span>
          </div>
        </li>
        <li>
          <div className="author-thumb">
            <img src={pdf} alt="author" />
          </div>
          <div className="notification-event">
            <a href="." className="h6 notification-friend">
              Mary Jane Stark{" "}
            </a>{" "}
            added 20 new photos to her{" "}
            <a href="." className="notification-link">
              gallery album.
            </a>
            .
            <span className="notification-date">
              <time className="entry-date updated" dateTime="2004-07-24T18:18">
                12 mins ago
              </time>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
