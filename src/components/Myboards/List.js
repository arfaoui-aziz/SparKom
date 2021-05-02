import React, { Fragment, useEffect } from "react";
import ListCard from "./ListCard"
import ActionButtonL from "./ActionButtonL"
import ListForm from "./ListForm"
import { useServerApi } from "../../hooks/useServerApi";
import { queryServerApi } from "../../utils/queryServerApi";
  const List = (props) => {
    useEffect(() => {
        console.log(props.dms);
      }, [props.dms]);

      const [cards] = useServerApi("cards/");
      const [dmss, err, reload] = useServerApi("cards/");
      const deletecard = async (id) => {
        const [err] = await queryServerApi("cards/delete/" + id, {}, "GET");
        if (err) {
          console.log(err);
        } else await reload();
      };

  return (
      <>
      
         {props.dms?.map((dm, index) => (

              <div className="ui-block" data-mh="friend-groups-item">
      <div style={style.container} key={index}>
     
          <h4 style={{color: 'white', fontFamily: 'bold'}} >{dm.List_name}</h4>
          <div style={{paddingLeft: '270px'}}>
         <i class="far fa-trash-alt" style={{cursor:"pointer"}} onClick={() => {props.deletelist(dm._id);
              window.location.reload(false);}}>  </i>

         </div>
          <ListCard cards={cards} deletecard={deletecard}/>
          {/*<ListCard name="data models"/>
          <ListCard name="data models"/>*/}
          <ActionButtonL card/>
          </div> 

          </div>
          ))}
       
                <ListForm/>
               
      </>
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
