import React from "react";
import ActivityFeed from "./ActivityFeed";
import WeekEvent from "./WeekEvent";
import moment from "moment";
import { useServerApi } from "../../hooks/useServerApi";
import { useParams } from "react-router-dom";
import { getDate } from "date-fns";

export default function RightSidebar(props) {
  const { id } = useParams();
  const [dm, err, reload] = useServerApi("group/getevent/" + id);
  const toRender = dm;
  console.log(dm);
  console.log(moment().format("DD-MM-YYYY hh:mm:ss"));
  console.log(getDate(moment().format("DD-MM-YYYY hh:mm:ss")));
  return (
    <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
      {toRender ? (
        <>
          {getDate(toRender.Date) === moment().format("DD-MM-YYYY") ? (
            <>
              <WeekEvent dm={toRender} />
              <ActivityFeed />
            </>
          ) : (
            <>
              {" "}
              <ActivityFeed />
            </>
          )}
        </>
      ) : (
        <>
          <p>Event not found</p>
        </>
      )}
    </div>
  );
}
