import profilePic from "../../assets/img/author-main1.jpg";
import React, { useState } from "react";

export default function UserProfileCard() {
  const [followed, setFollowed] = useState(false);
  return (
    <div className="ui-block ">
      <div className="widget w-action  ">
        <a href="/myProfil" className="author-thumb">
          <img src={profilePic} alt="author" />
        </a>
        <div className="content">
          <h6 className="title">
            Amen Allah <br />
          </h6>
          <span>
            Followers <br />
            <a href="#top" className="alert-link text-white">
              5.7k
            </a>
          </span>
          <button
            className="btn btn-bg-secondary "
            onClick={() => setFollowed(!followed)}
          >
            {followed ? "UnFollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}
