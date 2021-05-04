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
import { queryApi } from "../../utils/queryApi";
import { activeUserSelector, avatarSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
export default function AllUsers({dm,board_id,dms}) {
  const history = useHistory();
  const activeUser = useSelector(activeUserSelector);
  const removemember = async (idb, idu) => {
    const [err] = await queryApi(
      "boards/LeaveBoard/",
      { board_id: idb, userId: idu },
      "Put",
      false
    );
    if (err) {
      console.log(err);
    } else history.push("/boards");
  };
  const [members, setmembers] = React.useState([]);
  const [member, setmember] = React.useState(false);
  //const CreatedBy = props.CreatedBy._id || props.CreatedBy;

  React.useEffect(() => {
    setmembers(dms && dms.Members);
    checkmember(dms && dms.Members);
  }, [dms.Members]);
  console.log(dms.Members);
  function checkmember(members) {
    let match = members.indexOf(dm._id) !== -1;
    setmember(match);
  }


  

  return (
    <>
     {member && dm._id!==dms.creator_id ? (
        <div class="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="ui-block">

            
                <div class="birthday-item inline-items">
                  <div class="author-thumb">
                    <img src={friend} alt="author" />
                  </div>
                  <div class="birthday-author-name">
                    <a href="#" class="h6 author-name">
                      {dm.firstname} {dm.lastname}{" "}
                    </a>
                    <div class="birthday-date">{dm.email}</div>
                  </div>
                  <a
                    class="btn btn-sm bg-blue"
                    onClick={() => {
                        removemember(board_id, dm._id);
                      history.push("/boards");
                    }}
                  >
                    remove{" "}
                  </a>
                </div>
           
            </div>

        </div>
        ):(<></>)}
    </>
  );
}
