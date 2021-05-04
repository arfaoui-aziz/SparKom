import React , { useState } from "react";
import Bheader from "./Bheader";
import BoardForm from "./BoardForm";
import Form3 from "./Form3";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
export default function PBoardAdd() {
 
  
  return (
    <div >
        <NavBar/>
        <Bheader/>
        <div class="container">
      
        <Form3/>
        </div>

       
              

     
    </div>
  );
}
