import React from "react";
import cover from "../../assets/img/top-header4.png";
import profilePic from "../../assets/img/author-main1.jpg";
export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="ui-block">
            <div className="top-header">
              <div className="top-header-thumb">
                <img src={cover} alt="nature" />
              </div>
              <div className="profile-section">
                <div className="row">
                  <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                    <ul className="profile-menu">
                      <li>
                        <a href="02-ProfilePage.html" className="active">
                          Timeline
                        </a>
                      </li>
                      <li>
                        <a href="05-ProfilePage-About.html">About</a>
                      </li>
                      <li>
                        <a href="06-ProfilePage.html">Friends</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                    <ul className="profile-menu">
                      <li>
                        <a href="07-ProfilePage-Photos.html">Photos</a>
                      </li>
                      <li>
                        <a href="09-ProfilePage-Videos.html">Videos</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="top-header-author">
                  <a href="02-ProfilePage.html" className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </a>
                  <div className="author-content">
                    <a href="02-ProfilePage.html" className="h4 author-name">
                      Aziz Arfaoui
                    </a>
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
