import React, { useState } from "react";
import ListCard from "./ListCard"
import ActionButton from "./ActionButton"
  const List = ({title}) => {
    

  return (
      <div style={style.container}>
          <h4 style={{color: 'white', fontFamily: 'bold'}} >{title}</h4>
          <ListCard name="user interface"/>
          <ListCard name="data models"/>
          <ListCard name="data models"/>
          <ActionButton card/>

      </div>
  )  
};
const style ={
    container: {
        backgroundColor: "#B5B7B6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
        } 

}
export default List;
