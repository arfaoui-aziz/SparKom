import React from "react";
import logo from "../../assets/img/logo.png";
import friend from "../../assets/img/friend-harmonic5.jpg";

import icons from "../../assets/svg-icons/sprites/icons.svg";
import { Link } from "react-router-dom";
import Oneboard from "./OneBoard";
export default function Boards() {
  return (
    <div class="container">
      <div class="row">
	  <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div class="ui-block responsive-flex">
				<div class="ui-block-title">
					<div class="h6 title">James’s Boards</div>
					
							<form class="search-bar w-search notification-list friend-requests bg-white">
								<div class="form-group with-button bg-white">
									<input class="form-control js-user-search bg-white" placeholder="Search here " type="text"/>
									<button class="bg-white">
									<svg class="olymp-magnifying-glass-icon"><use xlinkHref={`${icons}#olymp-magnifying-glass-icon`}></use></svg>
									</button>
								</div>
							</form>


				
					
						</div>
			</div>
		</div>
		<div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
    <div class="ui-block " data-mh="friend-groups-item">
    		<div class="friend-item friend-groups" >
				
        		<div class="friend-item-content ">
          			<div class="friend-avatar">
					  
            				<div class="content">
							
								<h5  >|</h5>
					
								<a href="#" class="btn btn-blue btn-lg">+ Create  a Board</a>
							
								<span class="sub-title"><h3>It only takes a few minutes!</h3>
								
								</span>
							
							</div>
						

        			</div>

         
         
    			</div>
       	 </div>
    </div>
  </div>
		<Oneboard/>
        <Oneboard/>
		<Oneboard/>
		<Oneboard/>
      </div>
    </div>
  );
}
