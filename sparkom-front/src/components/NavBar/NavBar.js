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
import userAvatar from "../../assets/img/avatar1.jpg";
import img from "../../assets/img/comment-photo.jpg";
import { Link } from "react-router-dom";
import { isLogged } from "../../helpers/auth";
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const jwt = isLogged();
  return (
    <header className="header bg-white" id="site-header">
      <div className="page-title ">
        <Link to="/me">
          <img src={logo} alt="logo" style={{ height: 40, marginTop: -10 }} />
        </Link>
      </div>
      <div className="header-content-wrapper">
      <div className="control-block">
          <div className="control-icon">
            <div className="author-title ">
              <Link to="/">
                <div
                  className="c-secondary"
                  style={{ borderBottom: "2px solid blue" }}
                >
                  Home
                </div>
              </Link>
            </div>
          </div>


          <div className="control-icon">
            <div className="author-title ">
              <Link to="/">
                <div
                  className="c-secondary"
                  
                >
                  Groups
                </div>
              </Link>
            </div>
          </div>

          <div className="control-icon">
            <div className="author-title ">
              <Link to="/">
                <div
                  className="c-secondary"
                  
                >
                  Jobs
                </div>
              </Link>
            </div>
          </div>

          <div className="control-icon">
            <div className="author-title ">
              <Link to="/">
                <div
                  className="c-secondary"
                  
                >
                  Freelance
                </div>
              </Link>
            </div>
          </div>
          <div className="control-icon">
            <div className="author-title ">
              <Link to="/questions">
                <div
                  className="c-secondary"
                  
                >
                  Forum
                </div>
              </Link>

            </div>
          </div>
          <div className="control-icon">
            <div className="author-title ">
            <a href={"http://localhost:3006/live"} target="_blank" className="composition-name"><span style={{color: "red"}}> Go Live •</span></a>

              </div></div>

          


          <FormControl className={classes.margin}>
        <BootstrapInput id="demo-customized-textbox" placeholder="Search..."/>
      </FormControl>


          <div className="control-icon more has-items">
            <svg className="olymp-happy-face-icon c-secondary">
              <PersonAddIcon />
            </svg>
            <div className="label-avatar bg-blue">1</div>
            <div className="more-dropdown more-with-triangle triangle-top-center">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">FRIEND REQUESTS</h6>
              </div>
              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <ul className="notification-list friend-requests">
                  <FriendRequest />
                </ul>
              </div>
              <Link to="/me/requests" className="view-all bg-blue">
                Check all Friend Request
              </Link>
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
            <div className="label-avatar bg-primary">2</div>
            <div className="more-dropdown more-with-triangle triangle-top-center">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Notifications</h6>
              </div>
              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <ul className="notification-list">
                  <Notification
                    userName="Mathilda Binker"
                    description="commented on your new profile status."
                    date="4 hours ago"
                    userAvatar={userAvatar}
                  />
                  <Notification
                    userName="Sarah "
                    description="commented on your new photo."
                    date="Yesterday at 5:32am"
                    userAvatar={userAvatar}
                    notifImg={img}
                    comment="“incredible ! We should see each...”"
                  />
                </ul>
              </div>
              <Link to="/me/notifs" className="view-all bg-primary">
                View All Notifications
              </Link>
            </div>
          </div>
          <div className="author-page author vcard inline-items more">
            <div className="author-thumb">
              <img
                alt="author"
                src={`http://localhost:8888/api/user/photo/${jwt.user._id
              }?${new Date().getTime()}`}
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
                    <Link to="/settings">
                      <li>
                        <a href="29-YourAccount-AccountSettings.html">
                          <svg className="olymp-menu-icon">
                            <use xlinkHref={`${icons}#olymp-menu-icon`} />
                          </svg>
                          <span>Profile Settings</span>
                        </a>
                      </li>
                    </Link>
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
                <div className="c-secondary">{jwt.user.name}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
