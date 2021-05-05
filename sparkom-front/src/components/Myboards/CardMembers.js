import React, { useState , useEffect } from "react";
import Bheader from "./Bheader";
import Alllists from "./AllLists";
import List from "./List";
import Members from "./Members";
import ActionButton from "./ActionButton";
import ListForm from "./ListForm";
import { useServerApi } from "../../hooks/useServerApi";
import { queryApi } from "../../utils/queryApi";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Allcards from "./Allcards";
import CardUsers from "./CardUsers";
import { activeUserSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import axios from "axios";
export default function CardMembers() {
  const { id,idl } = useParams();
  console.log("carrrd",id,idl);
  const [dms] = useServerApi("boards/get/Allusers" );
  const [data, setData] = React.useState([]);
  
  const [delivs, setdelivs] = useState(false);

  const getdelivs = async () => {
    try {
      const userPosts = await axios.get(
        "http://localhost:3002/lists/detail/list/" + idl
      );
      console.log("dataaa",userPosts.data.board_id);
      setdelivs(userPosts.data); // set State
      
    } catch (err) {
      console.error(err.message);
    }
  };
  console.log("deliv1",delivs.board_id);

  React.useEffect(() => {
    getdelivs();
    setData(dms);
  }, [dms]);
  const [dm, er, reloadd] = useServerApi("cards/detail/" + id);
  const toRender = dm;
  
  return (
    <div>
          {toRender ? (
              <>
      <NavBar />
      <Members />
      <Bheader />
      <Allcards idl={dm.list_id}/>
      <div class="container">
        <div class="row">
          <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="ui-block">
              <div class="ui-block-title">
                <h6 class="title">Add members</h6>
              </div>
            </div>
          </div>
          {data &&
                    data.map((item, i) => {
                      
                      return <CardUsers dm={item} idl={idl} card={dm} board_id={delivs.board_id} key={item._id}/>
                      
                      ;
                    })}
          {/*<Alllists dm={toRender}/>*/}
         
        </div>
      </div>
      </>
      ):
      (<div></div>)}
    </div>
  );
}
