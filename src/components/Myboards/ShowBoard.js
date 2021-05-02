import React, { useState }  from "react";
import Bheader from "./Bheader";
import Alllists from "./AllLists";
import List from "./List";
import Members from "./Members";
import ActionButton from "./ActionButton";
import ListForm from "./ListForm"
import { useServerApi } from "../../hooks/useServerApi";
import { queryServerApi } from "../../utils/queryServerApi";
import { useParams } from "react-router-dom";
const styles = {
  Listcontainer: {
    display: "flex",
    flexDirection: "row",
    margin: 8
  }
};
export default function ShowBoard() {
  const { id } = useParams();
  console.log(id);
  const [dms] = useServerApi("lists/");
  const [dmss, err, reload] = useServerApi("lists/");
  const deletelist = async (id) => {
    const [err] = await queryServerApi("lists/delete/" + id, {}, "GET");
    if (err) {
      console.log(err);
    } else await reload();
  };

  
  const [dm, er, reloadd] = useServerApi("boards/" + id);
  const toRender = dm;

  return (
    <div>
      {toRender ? (
          <>
        <Members/>
        <Bheader/>

        <Alllists dm={toRender}/>
        <div class="container">
        <div class="row">
                 <div style={styles.Listcontainer}>
                 <div className="row">
                  <List dms={dms}   deletelist={deletelist}/>
                   </div>
                </div>
                <div style={styles.Listcontainer}>
                <div className="row">
                {/*<ListForm/>*/}
                </div>
                </div>
        </div>
        </div>
        </>
        ) : (
          <p>Board not found</p>
        )}
 
        
        
       
       
     
    </div>
  );}