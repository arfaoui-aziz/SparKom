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
import { activeUserSelector, avatarSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";

export default function Oneboard(props) {
  const activeUser = useSelector(activeUserSelector);
  useEffect(() => {
    console.log(props.dms);
  }, [props.dms]);
  const history = useHistory();
  const Details = (idd) => {
    history.replace("/ShowBoard/" + idd);
    console.log(history);
  };
  const members = (idd) => {
    history.replace("/AddMembers/" + idd);
    console.log(history);
  };
  const dmembers = (idd) => {
    history.replace("/DeleteMembers/" + idd);
    console.log(history);
  };
  return (
    <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

       
        {props.dms?.map((dm, index) => (
        <div key={index}>
          {dm.Is_public || dm.creator_id===activeUser._id ? (
    <div class="ui-block" data-mh="friend-groups-item">
      <div class="friend-item friend-groups">
        <div class="friend-item-content">
          <div class="more">
            <svg class="olymp-three-dots-icon">
              <use xlinkHref={`${icons}#olymp-three-dots-icon`}></use>
            </svg>
            <ul class="more-dropdown">
              {(dm.creator_id===activeUser._id) ? (
              <li>
                <a href="/boards" onClick={() => props.deleteboard(dm._id)} >delete board</a>
              
              </li>):
              (<li></li>)
              }
               {(dm.creator_id!==activeUser._id) ? (
              <li>
                <a href="#">unjoin board</a>
              </li>
              ):
              (<li></li>)
              }
              {/*<li>
                <a href="#">Turn Off Notifications</a>
              </li>*/}
            </ul>
          </div>
          <div class="friend-avatar">
           
            <div class="author-content">
              <a  class="h5 author-name"  onClick={() => Details(dm._id)}>
               {dm.Board_name}
              </a>
              <div class="country">{dm.Members.length} Members in the board</div>
            </div>
          </div>
          { 	dm.Members?.map((item, i) => (
			
          <ul class="friends-harmonic" key={i}>
            <li>
              <a href="#">
                <img src={friend} alt="friend" />
              </a>
            </li>
            
          </ul>
      
		))}                  
                            <div class="control-block-button">
                                <a onClick={() => members(dm._id)} className="accept-request">
                                <span className="icon-add without-text">
                                <svg className="olymp-happy-face-icon">
                                <use xlinkHref={`${icons}#olymp-happy-face-icon`} />
                                </svg>
                                
                                </span>
                                </a>
                                {(dm.creator_id===activeUser._id) ? (
                                <a onClick={() => dmembers(dm._id)} href="#" className="accept-request request-del">
                                <span className="icon-minus">
                                    <svg className="olymp-happy-face-icon">
                                <use xlinkHref={`${icons}#olymp-happy-face-icon`} />
                                </svg>
                                </span>
                                </a>):
                                (<a></a>)}
                             </div>
        </div>
      </div>
    </div>
    ): (<></>)}
    </div> 

    ))}
</div>
  );}