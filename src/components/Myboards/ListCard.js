import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import EditIcon from '@material-ui/icons/Edit';
import CardEdit from "./CardEdit";
import CardForm from "./CardForm";
import avatar2 from "../../assets/img/avatar72-sm.jpg";
import avatar5 from "../../assets/img/avatar70-sm.jpg";
import avatar6 from "../../assets/img/avatar71-sm.jpg";
const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const EditButton = styled(EditIcon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

  const ListCard = ({name}) => {
      const [buttonPopup, setButtonPopup] = useState(false);
    return (
      <div>
     <Card style={styles.cardContainer}>
         <cardContainer >
             <Card >
                 <Typography gutterBottom> {name} </Typography>
                
                 <img alt="author" src={avatar2} className="avatar"/>
                 <img alt="author" src={avatar5} className="avatar"/>
                 <img alt="author" src={avatar6} className="avatar"/>
           </Card>
            
         </cardContainer>
         <div style={{paddingLeft: '250px'}}>
         <i class="far fa-trash-alt" style={{cursor:"pointer"}} >  </i>
         <i class="far fa-edit" style={{cursor:"pointer"}}  onClick={() => setButtonPopup(true)}></i>
        
         </div>
         
         
     </Card>
     <CardEdit trigger={buttonPopup} setTrigger={setButtonPopup}>
         
            <CardForm/>
            </CardEdit>
     </div>
    );}

 const styles = {
     cardContainer: {
         marginBottom: 8
     }
 }

export default ListCard;
