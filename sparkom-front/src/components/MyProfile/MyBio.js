import React from "react";
import BioInfo from "./BioInfo";

export default function MyBio() {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Bio</h6>
      </div>
      <div className="ui-block-content">
        <ul className="widget w-personal-info item-block">
          <BioInfo
            title="About Me:"
            text="Hi, I’m James, I’m 36 and I work as a Digital Designer for the
                “Daydreams” Agency in Pier 56."
          />

          <BioInfo
            title="Favourite TV Shows:"
            text="Breaking Good, RedDevil, People of Interest, The Running Dead,
              Found, American Guy."
          />

          <BioInfo
            title="Favourite Music Bands / Artists:"
            text="  Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a
              Revenge."
          />
        </ul>
      </div>
    </div>
  );
}
