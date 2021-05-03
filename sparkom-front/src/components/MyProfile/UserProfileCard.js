import profilePic from "../../assets/img/author-main1.jpg";
import React, { useState } from "react";

export default function UserProfileCard({ profile }) {
  const { followers, my_id, bio, occupation, _id } = profile;
  const { avatar, username } = my_id;
  const [followed, setFollowed] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const [err, res]= queryApi("")
    setFollowed(!followed);
  };
  return (
    <div className="ui-block ">
      <div className="widget w-action  ">
        <a href="/myProfil" className="author-thumb">
          <img src={avatar || profilePic} alt="author" />
        </a>
        <div className="content">
          <h6 className="title">
            {username} <br />
          </h6>
          <span>
            Followers <br />
            <a href="#top" className="alert-link text-white">
              {followers.length}
            </a>
          </span>
          <button
            type="submit"
            className="btn btn-bg-secondary "
            onClick={handleSubmit}
          >
            {followed ? "UnFollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}
