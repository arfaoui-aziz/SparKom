import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
export default function Allcards(props) {

  
  return (
    <div class="container">
   
      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="ui-block responsive-flex">
          <div class="ui-block-title">
                <div>
                 <a href="/boards" data-toggle="modal" data-target="#create-photo-album" class="btn btn-primary btn-md-2"><i className="fab fa-trello boards-btn-icon" /> Back to Boards</a>
                </div>
                <div class="h6 title"> </div>
              
  
                
                   
                <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlinkHref={`${icons}#olymp-three-dots-icon`}></use></svg></a>
									   </div>
        </div>
      </div>
      
      </div>


  );}