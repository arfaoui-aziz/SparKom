import React from "react";
import cover from "../../assets/img/top-header2.jpg";
import { Link } from "react-router-dom";
import profilePic from "../../assets/img/author-main2.jpg";
import eya from "../../assets/img/eya.png";
import leave from "../../assets/img/leave.png";
import add from "../../assets/img/add.png";
import { queryServerApi } from "../../utils/queryServerApi";

import { useHistory } from "react-router-dom";
export default function HeaderG(props) {
  const history = useHistory();
  const Details = (id) => {
    history.replace("/g/" + id);
  };
  const events = (id) => {
    history.replace("/ge/" + id);
  };
  const statistic = (id) => {
    history.replace("/static/" + id);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <div className="top-header top-header-favorit">
                <div className="top-header-thumb">
                  <img src={cover} alt="nature" />
                  <div className="top-header-author">
                    <div className="author-thumb">
                      <img
                        src={
                          process.env.REACT_APP_API_URL_UPLOADS +
                          "/" +
                          props.dm.Image
                        }
                        alt="author"
                      />
                    </div>
                    <div className="author-content">
                      <a href=".html" className="h3 author-name">
                        {props.dm.name}
                      </a>
                      <div className="country">0 Members</div>
                    </div>
                  </div>
                </div>
                <div className="profile-section">
                  <div className="row">
                    <div className="col col-xl-8 m-auto col-lg-8 col-md-12">
                      <ul className="profile-menu">
                        <li>
                          <a onClick={() => Details(props.dm._id)}>Timeline</a>
                        </li>
                        <li>
                          <a href="13-FavouritePage-About.html">About</a>
                        </li>
                        <li>
                          <a href="07-ProfilePage-Photos.html">Photos</a>
                        </li>
                        <li>
                          <a href="09-ProfilePage-Videos.html">Videos</a>
                        </li>
                        <li>
                          <a onClick={() => statistic(props.dm._id)}>
                            Statistics
                          </a>
                        </li>
                        <li>
                          <a onClick={() => events(props.dm._id)}>Events</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="control-block-button">
                    <a href=".html" className="btn btn-control">
                      <img src={eya} alt="author" />
                    </a>
                    <a href=".html" className="btn btn-control">
                      <img src={leave} alt="author" />
                    </a>
                    {/*  <a href=".html" className="btn btn-control">
                      <div className="more">
                        <img src={add} alt="author" />
                        <ul className="more-dropdown">
                          <li>
                            <a href=".">Join Group</a>
                          </li>
                        </ul>
                      </div>
                    </a>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
