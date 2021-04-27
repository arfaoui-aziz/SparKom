import React from "react";
import BioInfo from "./BioInfo";
import SocialNetwork from "./SocialNetwork";

export default function MyBio() {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Group Bio</h6>
      </div>
      <div className="ui-block-content">
        <ul className="widget w-personal-info item-block">
          <BioInfo
            title="Rules"
            text="Hi, I’m Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Est eum vitae vel ex nobis sunt distinctio nisi, I’m 36 and I work as
            a Digital Designer for the."
          />

          <BioInfo
            title="Created At:"
            text="September 17th, 2013"
          />

          <BioInfo
            title="Based in:"
            text="San Francisco, California"
          />
             <BioInfo
            title="WebSite:"
            text="www.sparkom.com"
          />
             <BioInfo
            title="Members:"
            text="5630"
          />
          <SocialNetwork/>
        </ul>
      </div>
    </div>
  );
}
