import React from "react";
import Header from "../Group/Header";
import AddGrBu from "../Group/AddGrBu";
import GroupCard from "../Group/GroupCard";
import NavBar from "../../components/NavBar/NavBar";
import { useServerApi } from "../../hooks/useServerApi";
export default function AllGroups() {
  
  const [dms] = useServerApi("group/getdev");
  console.log(dms);
  
  return (
    <div>
      <div className="app">
        {/* Header */}
        <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div>
        {/* App Body */}
       
       
        <div className="container"> 
        <div className="row"> 
            <AddGrBu />

            <GroupCard dms={dms} />
          </div>
        </div>
      </div>
    </div>
  );
}
