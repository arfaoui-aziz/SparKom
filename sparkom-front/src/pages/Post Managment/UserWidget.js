import React from "react";
import { isLogged } from "../../helpers/auth";

export default function UserWidget() {
  const jwt = isLogged();

  return (
    <div className="ui-block">
      <div className="widget w-action">
        <a href="/myProfil" className="author-thumb">
          <img
            src={`http://localhost:3002/api/user/photo/${
              jwt.user._id
            }?${new Date().getTime()}`}
            alt="author"
            width="124"
            height="124"
          />
        </a>
        <div className="content">
          <h6 className="title">{jwt.user.name}</h6>
          <span>
            Followers <br />
            <a href="#" class="alert-link text-white">
              {jwt.user.followers.length}{" "}
            </a>
          </span>
          <a href="/myProfil" className="btn btn-bg-secondary ">
            Vist Profil
          </a>
        </div>
      </div>
    </div>
  );
}
