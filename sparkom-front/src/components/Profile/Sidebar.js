import { Avatar } from "@material-ui/core";
import "../../assets/css/Sidebar.css";
const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      {/* Top Sidebar */}
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1791&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Aziz Arfaoui</h2>
        <h4>Bio</h4>
      </div>
      {/* Stats*/}
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Followers</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Following</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      {/* End Stats */}
      <div className="sidebar__bottom">
        <p>Topics</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("designing")}
        {recentItem("reactjs")}
      </div>
    </div>
  );
};

export default Sidebar;
