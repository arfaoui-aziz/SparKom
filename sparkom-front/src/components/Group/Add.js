import React, {  useState } from "react";
import { useHistory } from "react-router-dom";
import { isLogged } from "../../helpers/auth";
import Form from "./Form/Form";

import axios from "axios";
export default function Add(props) {

  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const history = useHistory();
  let valeurs;
  const jwt = isLogged();
 const custom_file_upload_url = `http://localhost:8888/group/add/${jwt.user._id}`;
 const config = {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
};
 
  const handleSubmitFile = (values) => {
    console.log(valeurs);
    let formData = new FormData();
    formData.append("img", valeurs.img);  
    formData.append("CreatedBy",jwt.user._id);
    formData.append("name", valeurs.GroupName);
    formData.append("description", valeurs.Description);
    formData.append("IsPrivate", valeurs.Type);

    var reg = JSON.stringify(valeurs.Topic);

    formData.append("Topic", reg);
    console.log(reg);
    
    // the image field name should be similar to your api endpoint field name
    // in my case here the field name is customFile

    axios
      .post(custom_file_upload_url, formData, config 
      )
      .then((res) => {
       
  
        console.log(reg);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">

       
              <div className="login_info">
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Create Group</h2>
                <Form
                  onSubmit={async (values) => {
                    valeurs = values;
                    handleSubmitFile(values);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
 
    </section>
  );
}
