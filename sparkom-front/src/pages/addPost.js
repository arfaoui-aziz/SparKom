import React from "react";
import { useDispatch } from "react-redux";
//import { isLogged } from "../../helpers/auth";
//import { addPost } from "../../redux/actions/postActions";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import PermMedia from "@material-ui/icons/PermMedia";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { queryApi } from "../utils/queryApi";
import { addPost } from "../store/slices/postsSlice";
import { activeUserSelector} from "../store/slices/auth";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const style = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "row",
  width: "5vw",
  padding: 3,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#3d3c3b",
  borderRadius: 5,
  color: "#3d3c3b",
  marginLeft:"20%",
};
const style1 = {
  padding:"7%",
  marginLeft:"550%",
  marginBottom:"15%",
  color: "#fff",
  background: "#236aed",
};
export default function AddPost() {
console.log("yes");

  const refreshPage = ()=>{
    window.location.reload();
 }
  const activeUser = useSelector(activeUserSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const formik = useFormik({
  initialValues: {
  text: "",
  },
  validationSchema: yupSchema,
onSubmit: async (values) => {
    setShowLoader(true);
    const [res, err] = await queryApi("posts/create/" + activeUser._id, values, "POST", true);
    if (err) {
    setShowLoader(false);
    setError({
    visible: true,
    message: JSON.stringify(err.errors, null, 2),
    });
    } else {
    dispatch(addPost(res));
    console.log("cbn");
    history.push("/home");
    }
    },
});






  const classes = useStyles();
  

  return (
    <div className="ui-block">
      <div className="news-feed-form">
        <div className="tab-content">
          <form onSubmit={formik.handleSubmit} className="card p-2">
            <div className="form-group">
              <textarea
                rows="5"
                cols="30"
                name="text"
                placeholder="What's on your mind,Amen Allah?"
                value={formik.values.title}
onChange={formik.handleChange}
                className="form-control"
              />
            </div>
            <br />

            <div className="form-group">
              {/*<div className="form-group">

              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={(event) => handleInputChange(event)}
                className="form-control"
              />
            </div>*/}

              <span>{"   "}</span>

              <label htmlFor={"upload-button"}>
                <div style={style}>
                  <PermMedia style={{ marginRight: 5 ,marginLeft: 5, fontSize:"medium"}} /> Photo
                </div>
                <input
                  style={{ display: "none" }}
                  id="upload-button"
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={(event) => {
                    formik.setFieldValue("image", event.target.files[0]);
                    }}
                  className="form-control"
                />
              </label>
              <span>{"   "}</span>




              




              <label htmlFor="icon-button-file">
                <Button
                  variant="contained"
                  style={style1}
                  size="small"
                  className={classes.button}
                  type="submit"
                  onClick={refreshPage}
                >
                  Post
                </Button>
          </label>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
const yupSchema = Yup.object({
  text: Yup.string()
  .min(3, "Minimum 3 caractéres")
  .max(80, "Maximum 80 caractéres")
  .required("Champs requis!"),
  });