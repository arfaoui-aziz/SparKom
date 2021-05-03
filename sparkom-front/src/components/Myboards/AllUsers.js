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
export default function AllUsers(props) {
  const history = useHistory();

  const [dms] = useServerApi("boards/");
  const [dmss, err, reload] = useServerApi("boards/");
  const deleteboard = async (id) => {
    const [err] = await queryApi("boards/delete/" + id, {}, "GET");
    if (err) {
      console.log(err);
    } else await reload();
  };
  const addmember = async (idb, idu) => {
    const [err] = await queryApi(
      "boards/AddMember/",
      { board_id: idb, userId: idu },
      "Put",
      false
    );
    if (err) {
      console.log(err);
    } else history.push("/boards");
  };
  const boardid = props.board_id;
  

  return (
    <>
      {props.dms?.map((dm, index) => (
        <div class="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="ui-block">
            <div key={index}>
            
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
                      addmember(props.board_id, dm._id);
                      history.push("/boards");
                    }}
                  >
                    Add{" "}
                  </a>
                </div>
           
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
