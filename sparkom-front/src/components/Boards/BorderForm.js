import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form/Form";


import { queryServerApi } from "../../utils/queryServerApi";
import axios from "axios";

export default function Add(props) {
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const history = useHistory();
  let valeurs;
 const custom_file_upload_url = `http://localhost:3000/group/addboard`;

  const handleSubmitFile = (values) => {
    console.log(valeurs);
    let formData = new FormData();
    formData.append("name", valeurs.name);
    formData.append("status", valeurs.status);
 

  

    // the image field name should be similar to your api endpoint field name
    // in my case here the field name is customFile

    axios
      .post(custom_file_upload_url, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
     
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
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Create Boarder</h2>
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
