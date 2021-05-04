import React, { useState, useEffect } from "react";
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
export default function CardUsers({dm,idl,card,board_id}) {
  const history = useHistory();
  const activeUser = useSelector(activeUserSelector);
  const addmember = async (idb, idu) => {
    const [err] = await queryApi(
      "cards/AddMembers/card/",
      { card_id: idb, userId: idu },
      "Put",
      false
    );
    if (err) {
      console.log(err);
    } else history.push("/EditCard/"+idb);
  };
 

  const [delivs2, setdelivs2] = useState(false);
  const [members, setmembers] =useState([]);
  const [member, setmember] = useState(false);
  function checkmember(members) {
    let match = members.indexOf(dm._id) !== -1;
    setmember(match);
  }
  const getdelivs2 = async () => {
    try {
      const userPosts = await axios.get(
        "http://localhost:3002/boards/detail/" + board_id
      );
      console.log("data22",userPosts.data.Members);
      setdelivs2(userPosts.data); // set State
      setmembers(userPosts.data && userPosts.data.Members);
    checkmember(userPosts.data && userPosts.data.Members);
      
    } catch (err) {
      console.error(err.message);
    }
  };
  

  const [mbr, setmbr] = useState(false);
  function checkmbr(mbs) {
    let match = card.Members.indexOf(dm._id) !== -1;
    setmbr(match);
  }
 
  useEffect(() => {
 getdelivs2();
 checkmbr();

  }, []);





  return (
    <>
 {member && !mbr ? (
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
                      addmember(card._id, dm._id);
                      history.push("/EditCard/"+card._id);
                    }}
                  >
                    Add{" "}
                  </a>
                </div>
           
          </div>
        </div>
       ):(<></>)}
    </>
  );
}
