import React from "react";
import { useDispatch } from "react-redux";
import { isLogged } from "../../helpers/auth";
import TopicComp from "./TopicComp"

export default function TopicList({ topics }) {
  const jwt = isLogged();
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");


  

  return (

    <div>
    <div className="container">
<div className="row">
<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

{topics.map((item, index) => (
        <TopicComp comment={item} key={index}/>
      ))}


</div>
    </div>
</div>
</div>




    
  );
}