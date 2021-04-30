import React, { Fragment, useEffect } from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import gr from "../../assets/img/friend-group1.png";
import eya from "../../assets/img/eya.png";
import fr1 from "../../assets/img/friend-harmonic4.jpg";
import fr2 from "../../assets/img/friend-harmonic2.jpg";
import fr3 from "../../assets/img/friend-harmonic1.jpg";
import fr4 from "../../assets/img/friend-harmonic3.jpg";
import fr5 from "../../assets/img/friend-harmonic3.jpg";
import ph1 from "../../assets/img/aziz.jpg";
import leave from "../../assets/img/leave.png";
import add from "../../assets/img/add.png";
import { isLogged } from "../../helpers/auth";
import { useDispatch } from "react-redux";
import { JoinGroup, LeaveGroup } from "../../redux/actions/postActions";
import { queryServerApi } from "../../utils/queryServerApi";

import { useHistory } from "react-router-dom";

export default function GroupCard (props) {
  const dispatch = useDispatch();
  const [members, setmembers] = React.useState([]);
  const [member, setmember] = React.useState(false);
  //const CreatedBy = props.CreatedBy._id || props.CreatedBy;
  React.useEffect(() => {
    setmembers(props.dms&& props.dms);
   // checkmember(props.dms && props.dms);
  }, [props.dms]);

 /*function checkmember(members) {
    let match = members.indexOf(jwt.user._id) !== -1;
    setmember(match);
  }*/
  const jwt = isLogged();
  useEffect(() => {
    console.log(props.dms);
  
  }, [props.dms]);
  const history = useHistory();
  const Details = (id) => {
    history.replace("/g/" + id);
  };
  return (
    <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="container">
        <div className="row">
          {props.dms?.map((dm, index) => (
            <div key={index}>
              <div className="ui-block" data-mh="friend-groups-item">
                {/* Friend Item */}
                <div className="friend-item friend-groups">
                  <div className="friend-item-content">
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref={`${icons}#olymp-three-dots-icon`} />
                      </svg>
                      <ul className="more-dropdown">
                        <li>
                          <a href=".">Report Group</a>
                        </li>
                        <li>
                          <a href=".">Block Group</a>
                        </li>
                        <li>
                          <a href=".">Turn Off Notifications</a>
                        </li>
                      </ul>
                    </div>
                    <div className="friend-avatar">
                      <div className="author-thumb">
                        <img
                          src={
                            process.env.REACT_APP_API_URL_UPLOADS +
                            "/" +
                            dm.Image
                          }
                          onClick={() => Details(dm._id)}
                        />
                      </div>
                      <div className="author-content">
                        <a href="." className="h5 author-name">
                          {dm.name}
                        </a>
                        <div className="country"> {dm.Members.length} Members in the Group</div>
                      </div>
                    </div>
                    {/*  <ul className="friends-harmonic">
                  <li>
                    <a href=".">
                      <img src={fr2} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr3} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr4} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr1} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr5} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr1} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr2} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr3} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr4} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href="." className="all-users bg-blue">
                      +6
                    </a>
                  </li>
                </ul>*/}

                    {member? (
                      <>
                        <div className="control-block-button">
                          <a className="btn btn-control">
                          <img
                              src={leave}
                              alt="author"
                              onClick={() =>
                                dispatch(
                                  LeaveGroup(jwt.token, jwt.user._id, dm._id)
                                )
                              }
                            />
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="control-block-button">
                          <a className="btn btn-control">
                            
                          
                             <img
                              src={add}
                              alt="author"
                              onClick={() =>
                                dispatch(
                                  JoinGroup(jwt.token, jwt.user._id, dm._id)
                                
                                  
                                )
                              }
                            />
                            
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="header-spacer header-spacer-small mb-3"></div>
        <div class="header-spacer header-spacer-small mb-3"></div>
      </div>
    </div>
  );
}
