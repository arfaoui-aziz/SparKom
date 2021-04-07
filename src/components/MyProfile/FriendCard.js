import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import friendCover from "../../assets/img/friend1.jpg";
import friendAvatar from "../../assets/img/avatar1.jpg";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
export default function FriendCard() {
  return (
    <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
      <div className="ui-block">
        {/* Friend Item */}
        <div className="friend-item">
          <div className="friend-header-thumb">
            <img src={friendCover} alt="friend" />
          </div>
          <div className="friend-item-content">
            <div className="more">
              <svg className="olymp-three-dots-icon">
                <use xlinkHref={`${icons}#olymp-three-dots-icon`} />
              </svg>
              <ul className="more-dropdown">
                <li>
                  <a href="#">Report Profile</a>
                </li>
                <li>
                  <a href="#">Block Profile</a>
                </li>
                <li>
                  <a href="#">Turn Off Notifications</a>
                </li>
              </ul>
            </div>
            <div className="friend-avatar">
              <div className="author-thumb">
                <img src={friendAvatar} alt="author" />
              </div>
              <div className="author-content">
                <a href="#" className="h5 author-name">
                  Nicholas Grissom
                </a>
                <div className="country">San Francisco, CA</div>
              </div>
            </div>
            <div className="swiper-container" data-slide="fade">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="friend-count" data-swiper-parallax={-500}>
                    <a href="#" className="friend-count-item">
                      <div className="h6">52</div>
                      <div className="title">Friends</div>
                    </a>
                    <a href="#" className="friend-count-item">
                      <div className="h6">240</div>
                      <div className="title">Photos</div>
                    </a>
                    <a href="#" className="friend-count-item">
                      <div className="h6">16</div>
                      <div className="title">Videos</div>
                    </a>
                  </div>
                  <div
                    className="control-block-button"
                    data-swiper-parallax={-100}
                  >
                    <a href="#" className="btn btn-control bg-blue ">
                      <svg className="olymp-happy-face-icon pb-2">
                        <VisibilityOutlinedIcon />
                      </svg>
                    </a>
                    <a href="#" className="btn btn-control bg-purple">
                      <svg className="olymp-chat---messages-icon pb-2">
                        <use
                          xlinkHref={`${icons}#olymp-chat---messages-icon`}
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <p className="friend-about" data-swiper-parallax={-500}>
                    Hi!, I’m Marina and I’m a Community Manager for “Gametube”.
                    Gamer and full-time mother.
                  </p>
                  <div className="friend-since" data-swiper-parallax={-100}>
                    <span>Friends Since:</span>
                    <div className="h6">December 2014</div>
                  </div>
                </div>
              </div>
              {/* If we need pagination */}
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
