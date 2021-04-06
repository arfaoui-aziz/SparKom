import React from "react";
import MediaWidget from "./MediaWidget";
import FollowersWidget from "./FollowersWidget";
import PollWidget from "./PollWidget";

export default function RightSidebar() {
  return (
    <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
<MediaWidget/>
<FollowersWidget/>
<PollWidget />
      
    </div>
  );
}
