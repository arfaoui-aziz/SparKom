import React from "react";
import avatar from "../../assets/img/avatar10-sm.jpg";
import avatar3 from "../../assets/img/avatar24-sm.jpg";
import avatar4 from "../../assets/img/avatar36-sm.jpg";
import avatar2 from "../../assets/img/avatar38-sm.jpg";
export default function AdminMembers({ link, img, nbr }) {
    const AdminIcon = (avatar) => {
        return (
          <li>
            <a href="#">
              <img src={avatar} alt="author" />
            </a>
          </li>
        );
      };
    
      return (
        <div className="ui-block">
          <div className="ui-block-title">
            <h6 className="title">Administration</h6>
          </div>
          <div className="ui-block-content">
            <ul className="widget w-faved-page js-zoom-gallery">
              {AdminIcon(avatar)}
              {AdminIcon(avatar2)}
              {AdminIcon(avatar3)}
              {AdminIcon(avatar4)}
              {AdminIcon(avatar)}
              {AdminIcon(avatar2)}
              {AdminIcon(avatar3)}
              {AdminIcon(avatar4)}
              
            </ul>
          </div>
        </div>
      );
    }