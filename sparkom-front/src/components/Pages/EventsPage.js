import React from "react";
import Header from "../Group/Header";
import HeaderG from "../Group/HeaderG";

import NavBar from "../../components/NavBar/NavBar";
import Events from "../Events/Events";
import { useParams } from "react-router-dom";
import { useServerApi } from "../../hooks/useServerApi";
export default function EventsPage(props) {
  const { id } = useParams();
  const [dm, err, reload] = useServerApi("group/getdev/" + id);
  const toRender = dm;
  return (
    <div>
      <div className="app">
        {/* Header */}
        <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div> 
        {toRender ? (
          <>
        <HeaderG  dm={toRender} />
        
     
        
       
          <Events dm={toRender}/>
          
         
          </>
        ) : (
          <p>Product not found</p>
        )}
         
        </div>
      </div>
  );
}
