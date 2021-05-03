import profilePic from "../../assets/img/author-main1.jpg";
import React, { useState } from "react";
import { queryApi } from "../../utils/queryApi";
import SweetAlert from "../SweetAlert";
import { useDispatch } from "react-redux";
import { unfollowFriend, updateProfile } from "../../store/slices/profile";

export default function UserProfileCard({ profile }) {
  const dispatch = useDispatch();
  const { followers, my_id, _id } = profile;
  const { avatar, username } = my_id;
  const [followed, setFollowed] = useState(true);
  //TODO: fix unfollowFriend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [res, err] = await queryApi(`profile/me/follow/${_id}`, "", "POST");
    if (err) {
      SweetAlert("Error !", err, "error");
    } else {
      dispatch(unfollowFriend(_id));
      dispatch(updateProfile(res));
      setFollowed(!followed);
    }
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
