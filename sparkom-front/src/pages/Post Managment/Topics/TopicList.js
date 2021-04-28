import React from "react";
import TopicComp from "./TopicComp";

export default function TopicList({ topics }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(topics);
  }, [topics]);

  return (
    <div>
    <div className="container">
<div className="row">
<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

        {data &&
          data.map((item) => {
            return <TopicComp topic={item} />;
          })}
      </div>
      </div>
      </div>
      </div>
    
  );
}