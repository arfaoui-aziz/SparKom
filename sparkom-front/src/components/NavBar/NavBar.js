import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import profilePic from "../../assets/img/avatar1.jpg";
import logo from "../../assets/img/logosparkom.png";
import Notification from "./Notification";
import Messages from "./Messages";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import FriendRequest from "./FriendRequest";
export default function NavBar() {
  return (
    <header className="header bg-white" id="site-header">
      <div className="page-title ">
        <img src={logo} alt="logo" style={{ height: 40, marginTop: -10 }} />
      </div>
      <div className="header-content-wrapper">
        <div className="control-block">
          <div className="control-icon more has-items">
            <svg className="olymp-happy-face-icon c-secondary">
              <PersonAddIcon />
            </svg>
            <div className="label-avatar bg-blue">6</div>
            <div className="more-dropdown more-with-triangle triangle-top-center">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">FRIEND REQUESTS</h6>
              </div>
              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <ul className="notification-list friend-requests">
                  <FriendRequest />
                </ul>
              </div>
              <a href="#" className="view-all bg-blue">
                Check all Friend Request
              </a>
            </div>
          </div>
          <div className="control-icon more has-items ">
            <svg className="olymp-chat---messages-icon c-secondary">
              <ChatOutlinedIcon />
            </svg>
            <div className="label-avatar bg-purple">2</div>
            <div className="more-dropdown more-with-triangle triangle-top-center">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Chat / Messages</h6>
              </div>
              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <ul className="notification-list chat-message">
                  <Messages />
                </ul>
              </div>
              <a href="#" className="view-all bg-purple">
                View All Messages
              </a>
            </div>
          </div>
          <div className="control-icon more has-items">
            <svg className="olymp-thunder-icon c-secondary">
              <NotificationsNoneIcon />
            </svg>
            <div className="label-avatar bg-primary">8</div>
            <div className="more-dropdown more-with-triangle triangle-top-center">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Notifications</h6>
              </div>
              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <ul className="notification-list">
                  <Notification />
                </ul>
              </div>
              <a href="#" className="view-all bg-primary">
                View All Notifications
              </a>
            </div>
          </div>
          <div className="author-page author vcard inline-items more">
            <div className="author-thumb">
              <img
                alt="author"
                src={profilePic}
                style={{ width: 36, height: 36 }}
                className="avatar"
              />
              <span className="icon-status online" />
              <div className="more-dropdown more-with-triangle">
                <div className="mCustomScrollbar" data-mcs-theme="dark">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Your Account</h6>
                  </div>
                  <ul className="account-settings">
                    <li>
                      <a href="29-YourAccount-AccountSettings.html">
                        <svg className="olymp-menu-icon">
                          <use xlinkHref={`${icons}#olymp-menu-icon`} />
                        </svg>
                        <span>Profile Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="36-FavPage-SettingsAndCreatePopup.html">
                        <svg
                          className="olymp-star-icon left-menu-icon"
                          data-toggle="tooltip"
                          data-placement="right"
                          data-original-title="FAV PAGE"
                        >
                          <use xlinkHref={`${icons}#olymp-star-icon`} />
                        </svg>
                        <span>Create Fav Page</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="olymp-logout-icon">
                          <use xlinkHref={`${icons}#olymp-logout-icon`} />
                        </svg>
                        <span>Log Out</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="02-ProfilePage.html" className="author-name fn">
              <div className="author-title ">
                <div className="c-secondary">Aziz Arfaoui</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
