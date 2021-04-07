import React from "react";
import friend from "../../assets/img/avatar67-sm.jpg";
import avatar from "../../assets/img/avatar10-sm.jpg";
import avatar3 from "../../assets/img/avatar24-sm.jpg";
import avatar4 from "../../assets/img/avatar36-sm.jpg";
import avatar2 from "../../assets/img/avatar38-sm.jpg";
import avatar5 from "../../assets/img/avatar70-sm.jpg";
import avatar6 from "../../assets/img/avatar71-sm.jpg";
import avatar7 from "../../assets/img/avatar72-sm.jpg";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import { Link } from "react-router-dom";
import Oneboard from "./OneBoard";
const style = {
    top: 0,
    height: 545,
    right: 0
};
export default function Boards() {
  return (

    <div className="fixed-sidebar right">
	<div className="fixed-sidebar-right sidebar--small" id="sidebar-right">

		<div className="mCustomScrollbar" data-mcs-theme="dark">
			<ul className="chat-users">
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src={friend} className="avatar"/>
						<span className="icon-status online"></span>
					</div>
				</li>
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src={avatar} className="avatar"/>
						<span className="icon-status online"></span>
					</div>
				</li>

				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src={avatar2} className="avatar"/>
						<span className="icon-status online"></span>
					</div>
				</li>

				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src={avatar3} className="avatar"/>
						<span className="icon-status away"></span>
					</div>
				</li>

				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src={avatar5}className="avatar"/>
						<span className="icon-status disconected"></span>
					</div>
				</li>
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src={avatar4} className="avatar"/>
						<span className="icon-status online"></span>
					</div>
				</li>
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src={avatar6} className="avatar"/>
						<span className="icon-status online"></span>
					</div>
				</li>
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src={avatar7} className="avatar"/>
						<span className="icon-status away"></span>
					</div>
				</li>
                
                 
               
               </ul>        
               <li className="all-users">
                
                +74
               </li>
        </div>

		

		

	</div>

	</div>
    

  );
}
