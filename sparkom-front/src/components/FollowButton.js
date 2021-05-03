import React from "react";
import { subscribe, unsubscribe } from "../redux/actions/userActions";

export default function FollowButton({
  hanldeButtonClick,
  following,
  userId,
  token,
  followId,
}) {
  async function followUser() {
    const userData = await subscribe(userId, followId, token);
    if (userData.error) {
      console.log(userData.error);
    } else {
      hanldeButtonClick(userData.data);
    }
  }

  async function unfollowUser() {
    const userData = await unsubscribe(userId, followId, token);
    if (userData.error) {
      console.log(userData.error);
    } else {
      hanldeButtonClick(userData.data);
    }
  }

  return (
    <div className="row my-4">
      <div className="col-md-4 ml-auto">
        {following ? (
          <button className="btn btn-danger" onClick={() => unfollowUser()}>
            Se désabonner
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => followUser()}>
            Suivre
          </button>
        )}
      </div>
    </div>
  );
}