import React, { useState }  from "react";
import Pic from "../../assets/img/group-bottom.png";
import { Link } from "react-router-dom";
import Bheader from "./Bheader";
import Alllists from "./AllLists";
import List from "./List";
import Members from "./Members";
import ActionButton from "./ActionButton";

const styles = {
  Listcontainer: {
    display: "flex",
    flexDirection: "row",
    margin: 8
  }
};
export default function ShowBoard() {

  return (
    <div>
        <Members/>
        <Bheader/>

        <Alllists/>
        <div class="container">
        <div class="row">
                 <div style={styles.Listcontainer}>
                   <List title="to do"/>

                </div>
                <div style={styles.Listcontainer}>
                   <List title="doing"/>
                </div>
                <div style={styles.Listcontainer}>
                   <List title="done"/>
                </div>
                <div style={styles.Listcontainer}>
                   <List title="goals"/>
                </div>
                 
                <div style={styles.Listcontainer}>
                <ActionButton list/>
                </div>
        </div>
        </div>
       
       
     
    </div>
  );}