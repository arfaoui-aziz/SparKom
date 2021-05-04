import React from "react";
import ActivityFeed from "./ActivityFeed";
import WeekEvent from "./WeekEvent";
import moment from "moment";
import { useServerApi } from "../../hooks/useServerApi";
import { useParams } from "react-router-dom";

export default function RightSidebar(props) {
  const { id } = useParams();
  const [dm, err, reload] = useServerApi("group/getdev/" + id);
  const toRender = dm;

console.log(moment().format("DD-MM-YYYY hh:mm:ss"));
  return (
    <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
      <WeekEvent/>
      <ActivityFeed />
    </div>
  );
}
