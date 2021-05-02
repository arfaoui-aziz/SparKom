import React , { useState } from "react";
import Bheader from "./Bheader";
import BoardForm from "./BoardForm";
import CardForm from "./CardForm";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function EditCard() {


  return (
    <div >

        <Bheader/>
        <div class="container">
      
        <CardForm/>
        </div>
        <br></br>
        <div></div>

       
              

     
    </div>
  );
}
