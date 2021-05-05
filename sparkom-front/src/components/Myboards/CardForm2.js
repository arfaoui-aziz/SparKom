import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import { useState } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { activeUserSelector, avatarSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
export default function CardForm(props) {
  const card= props.dm;

  const style = { width: "200px" };


  const history = useHistory();

 



  const replace =  () => {history.replace("/EditCard/"+ props.idc);};
  const members = (idd) => {
    history.replace("/CardMembers/" + props.idc + "/"+ card.list_id);
    console.log(history);
  };
  const lists = (idd) => {
    history.replace("/CardLists/" + props.idc + "/"+ card.list_id);
    console.log(history);
  };
  return (
    <div class="ui-block">
      <div class="ui-block-title">
        <p>
          <h6 class="title">
            <i class="far fa-credit-card"></i> {card.Card_name}
          </h6>{" "}
          {/*in<a href="#"> Test</a> list*/}
        </p>
      </div>

      <div class="ui-block-content">
        <div class="row">
          <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group label-floating">
              <form className="content" >
                <h7>
                {card.Description!=null? (<h8> <i class="fas fa-align-left" /> Description : {card.Description}</h8> ): (
                <h8> <i class="fas fa-align-left" /> Description : No current description</h8>
                )} 
                </h7>
                <br/>
                <br/>
                <h7>
                {card.Members.length!==0? (<h8> <i class="fas fa-user" />   {card.Members.length} Members in this card</h8> ): (
                <h8> <i class="fas fa-user" /> No Members in this card</h8>
                )} 
                </h7>
                <br/>
                <br/>
                {/*<h7>
             
                <h8> <i class="far fa-plus-square"></i> Created at : {card.createdAt}</h8>
       
                </h7>
                <br/>
                <br/>
                <h7>
             
             <h8> <i class="fas fa-pen-square"></i> Updated at : {card.updatedAt}</h8>
    
             </h7>
             <br/>
             <br/>
                <h7>
                {card.Due_date!=null? (<h8> <i class="far fa-calendar-check"></i> Due Date  {card.Due_date} </h8> ): (
                <h8> <i class="far fa-calendar-check"></i> No Due Date </h8>
                )} 
                </h7>*/}
                  
        
            
              </form>
            </div>

            {/*<div class="form-group label-floating">
              <h7>
                <i class="fas fa-comments"></i> Activity
              </h7>
              <input
                class="form-control"
                placeholder="add a comment"
                type="email"
              />
                </div>*/}
          </div>

          <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group label-floating" style={{ float: "right" }}>
              
            
            <h7>
             
             <h8> <i class="far fa-plus-square"></i> Created at : {card.createdAt}</h8>
    
             </h7>
             <br/>
             <br/>
             <h7>
          
          <h8> <i class="fas fa-pen-square"></i> Updated at : {card.updatedAt}</h8>
 
          </h7>
          <br/>
          <br/>
             <h7>
             {card.Due_date!=null? (<h8> <i class="far fa-calendar-check"></i> Due Date  {card.Due_date} </h8> ): (
             <h8> <i class="far fa-calendar-check"></i> No Due Date </h8>
             )} 
             </h7>       
             
              
              
            </div>
          </div>
          
           </div>
      </div>
    </div>
  );
}
const yupSchema = Yup.object({
  description: Yup.string()
    .min(3, "Minimum 3 caractéres")
    .max(80, "Maximum 80 caractéres")
    .required("Champs requis!"),
});
