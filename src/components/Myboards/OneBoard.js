import React, { Fragment, useEffect } from "react";
import logo from "../../assets/img/logo.png";
import friend from "../../assets/img/friend-harmonic5.jpg";
import friend1 from "../../assets/img/friend-harmonic7.jpg";
import friend2 from "../../assets/img/friend-harmonic8.jpg";
import friend3 from "../../assets/img/friend-harmonic2.jpg";
import friend4 from "../../assets/img/friend-harmonic4.jpg";
import friend5 from "../../assets/img/friend-harmonic3.jpg";
import { useHistory } from "react-router-dom";
import icons from "../../assets/svg-icons/sprites/icons.svg";

export default function Oneboard(props) {
  useEffect(() => {
    console.log(props.dms);
  }, [props.dms]);
  const history = useHistory();
  const Details = (idd) => {
    history.replace("/ShowBoard/" + idd);
    console.log(history);
  };
  return (
    <div class="col col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
        {props.dms?.map((dm, index) => (
        <div key={index}>
       
    <div class="ui-block" data-mh="friend-groups-item">
      <div class="friend-item friend-groups">
        <div class="friend-item-content">
          <div class="more">
            <svg class="olymp-three-dots-icon">
              <use xlinkHref={`${icons}#olymp-three-dots-icon`}></use>
            </svg>
            <ul class="more-dropdown">
              <li>
                <a href="/boards" onClick={() => props.deleteboard(dm._id)} >delete board</a>
              
              </li>
              <li>
                <a href="#">unjoin board</a>
              </li>
              <li>
                <a href="#">Turn Off Notifications</a>
              </li>
            </ul>
          </div>
          <div class="friend-avatar">
           
            <div class="author-content">
              <a  class="h5 author-name"  onClick={() => Details(dm._id)}>
               {dm.Board_name}
              </a>
              <div class="country">6 Friends in the Group</div>
            </div>
          </div>

          <ul class="friends-harmonic">
            <li>
              <a href="#">
                <img src={friend} alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={friend1} alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={friend2} alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={friend3} alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={friend4} alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={friend5} alt="author" />
              </a>
            </li>
          </ul>
                            
                            <div class="control-block-button">
                                <a href="#" className="accept-request">
                                <span className="icon-add without-text">
                                <svg className="olymp-happy-face-icon">
                                <use xlinkHref={`${icons}#olymp-happy-face-icon`} />
                                </svg>
                                
                                </span>
                                </a>

                                <a href="#" className="accept-request request-del">
                                <span className="icon-minus">
                                    <svg className="olymp-happy-face-icon">
                                <use xlinkHref={`${icons}#olymp-happy-face-icon`} />
                                </svg>
                                </span>
                                </a>
                             </div>
        </div>
      </div>
    </div>
    </div> 
    ))}
</div>
  );}