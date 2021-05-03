import React from "react";
import { date } from "yup";
import BioInfo from "./BioInfo";
import SocialNetwork from "./SocialNetwork";

export default function MyBio(props) {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Group Bio</h6>
      </div>
      <div className="ui-block-content">
        <ul className="widget w-personal-info item-block">
          <BioInfo
            title="Bio"
            text={props.dm.description}
          />

          <BioInfo
            title="Created At:"
            text={props.dm.createdAt.substring(0,10)}
          />

          <BioInfo
            title="Topic:"
            text={props.dm.Topic?.map((ds, index) => (
              <div className="row" key={index}>
                <span class="btn-pill m-1 badge badge-info">
                  "{ds.value}
                </span>
              </div>
            ))}
            
          />
             <BioInfo
            title="WebSite:"
            text="www.sparkom.com"
          />
             <BioInfo
            title="Members:"
            text={props.dm.Members.length}
          />
          <SocialNetwork/>
        </ul>
      </div>
    </div>
  );
}
