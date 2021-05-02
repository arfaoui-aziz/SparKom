import React , { useState } from "react";
import Bheader from "./Bheader";
import BoardForm from "./BoardForm";
import Form2 from "./Form2";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function PBoardAdd() {
    const [buttonPopup, setButtonPopup] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const history = useHistory();
  let valeurs;
  const custom_file_upload_url = `http://localhost:3000/boards/addB/b`;

  const handleSubmitFile = (values) => {
    console.log(valeurs);
    let formData = new FormData();
    formData.append("board_name", valeurs.board_name);
    //formData.append("is_public", valeurs.is_public);
   // formData.append("type", valeurs.is_public);


    // the image field name should be similar to your api endpoint field name
    // in my case here the field name is customFile

    axios
      .post(custom_file_upload_url, formData)
      .then((res) => {
         console.log("resss",res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div >

        <Bheader/>
        <div class="container">
      
        <Form2/>
        </div>

       
              

     
    </div>
  );
}
