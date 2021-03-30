import "../../assets/css/Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import PostOption from "./PostOption";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { useEffect, useState } from "react";
import Posts from "../../db/posts.json";
import Post from "./Post";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts] = useState(Posts);
  const [input, setInput] = useState("");
  useEffect(() => {
    //fetch data from posts & update the statement
    //setPosts()
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    // add the new posts to db
    // {name : connected User , desciption}
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} type="text" onChange={handleChange} />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__postOptions">
          <PostOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <PostOption title="Video" Icon={VideoCallIcon} color="#f03d5b" />
          <PostOption title="Videos" Icon={SubscriptionsIcon} color="#e7a33e" />
          <PostOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts*/}
      <FlipMove>
        {posts.map((post, i) => (
          <Post
            name={post.name}
            description={post.description}
            message={post.message}
            key={i}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
