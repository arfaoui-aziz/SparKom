import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
export default function Alllists() {
  return (
    <div class="container">
   
      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="ui-block responsive-flex">
          <div class="ui-block-title">
                <div>
                 <a href="/boards" data-toggle="modal" data-target="#create-photo-album" class="btn btn-primary btn-md-2"><i className="fab fa-trello boards-btn-icon" /> Back to Boards</a>
                </div>
                <div class="h6 title"> Esprit</div>
              
  
                <form class="search-bar w-search notification-list friend-requests bg-white">
								<div class="form-group with-button bg-white">
									<input class="form-control js-user-search bg-white" placeholder="Search here " type="text"/>
									<button class="bg-white">
									<svg class="olymp-magnifying-glass-icon"><use xlinkHref={`${icons}#olymp-magnifying-glass-icon`}></use></svg>
									</button>
								</div>
							</form>
            
                   
                <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlinkHref={`${icons}#olymp-three-dots-icon`}></use></svg></a>
									   </div>
        </div>
      </div>
      
      </div>


  );}