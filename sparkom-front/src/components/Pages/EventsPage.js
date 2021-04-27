import React from "react";
import Header from "../Group/Header";
import HeaderG from "../Group/HeaderG";

import NavBar from "../../components/NavBar/NavBar";
import Events from "../Events/Events";
export default function EventsPage() {
  return (
    <div>
      <div className="app">
        {/* Header */}
        <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div> 
        <HeaderG />
        
        {/* App Body */}
        <div className="app__body">
        
       
          <Events />
          
         
     
         
        </div>
      </div>
    </div>
  );
}
