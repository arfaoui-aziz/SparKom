import React from "react";
import Header from "../Group/Header";
import HeaderG from "../Group/HeaderG";

import NavBar from "../../components/NavBar/NavBar";
import Events from "../Events/Events";
import { useParams } from "react-router-dom";
import { useServerApi } from "../../hooks/useServerApi";
import { EventSeatSharp } from "@material-ui/icons";
export default function EventsPage(props) {
  const { id } = useParams();
  const [dm, err, reload] = useServerApi("group/getdev/" + id);
  const toRender = dm;
  const [events] = useServerApi("group/getevent/" + id);
  const toRender2 = events;
  console.log(events);


  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(events);
  }, [events]);

  return (
    <div>
      <div className="app">
        {/* Header */}
        <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div>
        {toRender ? (
          <>
            <HeaderG dm={toRender} />

            {data &&
              data.map((item, i) => {
                return <Events dm={toRender} events={item} key={item._id} />;
              })}
          </>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
}
