import React, { useState } from "react";
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
import AllUsers from "./AllUsers";
import CardUsers from "./CardUsers";

export default function CardMembers() {
  const { id } = useParams();
  console.log("carrrd",id);
  const [dms] = useServerApi("boards/get/Allusers" );
  const [dmss, err, reload] = useServerApi("lists/");


  const [dm, er, reloadd] = useServerApi("cards/detail/" + id);
  const toRender = dm;
  return (
    <div>
          {toRender ? (
              <>
      <NavBar />
      <Members />
      <Bheader />
      <Alllists dm={toRender}/>
      <div class="container">
        <div class="row">
          <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="ui-block">
              <div class="ui-block-title">
                <h6 class="title">Add members</h6>
              </div>
            </div>
          </div>

          {/*<Alllists dm={toRender}/>*/}
          <CardUsers dms={dms} card_id={id} />
        </div>
      </div>
      </>
      ):
      (<div></div>)}
    </div>
  );
}