import React from "react";
import Post from "./Post";
import postimg from "../../assets/img/post-photo6.jpg";
import Comments from "./Comments";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import PostOption from "./PostOption";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { TextField } from "@material-ui/core";
import PostForm from "./PostForm";
export default function Feed() {
  return (
    <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
      <div id="newsfeed-items-grid">
        <PostForm />
        <Post
          date="2 hours ago"
          img={postimg}
          likesnbr="40"
          sharenbr="24"
          commentsnbr="2"
          content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris consequat."
          comments={<Comments />}
        />
        <Post
          date="2 hours ago"
          img={postimg}
          likesnbr="40"
          sharenbr="24"
          commentsnbr="2"
          content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris consequat."
        />
      </div>
    </div>
  );
}
