import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import friend from "../../assets/img/friend-harmonic5.jpg";
import axios from "axios";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import { Link } from "react-router-dom";
import Oneboard from "./OneBoard";
import BoardAdd from "./BoardAdd";
import PBoardAdd from "./PBoardAdd";
import { useHistory } from "react-router-dom";
import { useServerApi } from "../../hooks/useServerApi";
import { queryServerApi } from "../../utils/queryServerApi";
export default function Boards(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [dms] = useServerApi("boards/");
  const [dmss, err, reload] = useServerApi("boards/");
  const deleteboard = async (id) => {
    const [err] = await queryServerApi("boards/delete/" + id, {}, "GET");
    if (err) {
      console.log(err);
    } else await reload();
  };
  console.log(dms);
  return (
    <div class="container">
      <div class="row">
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="ui-block responsive-flex">
            <div class="ui-block-title">
              <div class="h6 title">James’s Boards</div>

              <form class="search-bar w-search notification-list friend-requests bg-white">
                <div class="form-group with-button bg-white">
                  <input
                    class="form-control js-user-search bg-white"
                    placeholder="Search here "
                    type="text"
                  />
                  <button class="bg-white">
                    <svg class="olymp-magnifying-glass-icon">
                      <use
                        xlinkHref={`${icons}#olymp-magnifying-glass-icon`}
                      ></use>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="ui-block responsive-flex">
            <div class="friend-item friend-groups">
              <div class="friend-item-content ">
                <div class="friend-avatar">
                  <div class="content">
                    <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group label-floating is-empty "></div>
                      <Link to="/PBoardAdd">
                        <button className="btn btn-primary btn-lg full-width">
                          + Create a Board
                        </button>
                      </Link>
                    </div>

                    <span class="sub-title">
                      <h4>It only takes a few minutes!</h4>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <Oneboard dms={dms} 
        deleteboard={deleteboard}
       />
      </div>
      <BoardAdd trigger={buttonPopup} setTrigger={setButtonPopup}>
        <PBoardAdd />
      </BoardAdd>
    </div>
  );
}
