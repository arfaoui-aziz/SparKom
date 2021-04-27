import React from "react";
import Header from "../Group/Header";
import HeaderG from "../Group/HeaderG";

import NavBar from "../../components/NavBar/NavBar";
import Statics from "../Group/StaticsGroup";
export default function StaticsPageGroup() {
  return (
    <div>
      <div className="app">
        {/* Header */}
        <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div> 
        <HeaderG />
        
        {/* App Body */}
        <div className="app__body">
        
       
          <Statics />
          
         
     
         
        </div>
      </div>
    </div>
  );
}
