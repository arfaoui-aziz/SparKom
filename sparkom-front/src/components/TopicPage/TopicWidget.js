import React from "react";
import profilePic from "../../assets/img/author-main1.jpg";
export default function TopicWidget() {
  return (



    <div className="ui-block">

    <div className="widget w-action">
      <a href="/myProfil" className="author-thumb">
        <img src={profilePic} alt="author" />
      </a>
      <div className="content">
        <h6 className="title">
          Python
        </h6>
        <span>
          Followers <br />
          <a href="#" class="alert-link text-white">
            5.200
          </a>
        </span>
        <a href="/myProfil" className="btn btn-bg-secondary ">
          Unfollow
        </a>
      </div>
    </div>
    </div>
  );
}
