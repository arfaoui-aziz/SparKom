import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { addJob } from "../../../store/slices/jobs";
import { queryApi } from "../../../utils/queryApi";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

function HiringForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [, setShowLoader] = useState(false);
  const [, setError] = useState({ visible: false, message: "" });

  const initialValues = {
    title: "",
    description: "",
    country: "",
    startingdate: "",
    contract: "",
    salary: "",
    experience: "",
    study: "",
    startingtime: "",
    endingtime: "",
    languages: "",
    responsibility: "",
    employesNeeded: "",
    image: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      console.log(values, currentFile, "-----------------");
      values.image = currentFile;
      /* let formData = new FormData();    
      formData.append('image',currentFile);
      formData.append('endingtime',values.endingtime);
      formData.append('languages',values.languages);
      formData.append('responsibility',values.responsibility);
      formData.append('employesNeeded',values.employesNeeded);
      formData.append('startingtime',values.startingtime);
      formData.append('study',values.study);
      formData.append('experience',values.experience);
      formData.append('salary',values.salary);
      formData.append('country',values.country);
      formData.append('startingdate',values.startingdate);
      formData.append('contract',values.contract);
      formData.append('title',values.title);
      formData.append('description',values.description);*/

      setShowLoader(true);
      const [res, err] = await queryApi("job/", values, "POST", true);
      if (err) {
        setShowLoader(false);
        setError({
          visible: true,
          message: err,
        });
      } else {
        dispatch(addJob(res));
        history.push("/findjob");
      }
    },
  });
  const [currentFile, setCurrentFile] = useState(0);
  const selectFile = (event) => {
    setCurrentFile(event.target.files[0]);
  };

  return (
    <div>
      <Container>
        <form className="content" onSubmit={formik.handleSubmit}>
          <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
            <h2 className="presentation-margin">Hiring Form</h2>
            <div className="ui-block">
              <div className="ui-block-content">
                <div className="row">
                  <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="title"
                        name="title"
                        label="Title"
                        variant="outlined"
                        value={formik.values.title}
                        helpertext={formik.touched.title && formik.errors.title}
                        error={
                          formik.touched.title && Boolean(formik.errors.title)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="description"
                        name="description"
                        label="Description"
                        variant="outlined"
                        value={formik.values.description}
                        helpertext={
                          formik.touched.description &&
                          formik.errors.description
                        }
                        error={
                          formik.touched.description &&
                          Boolean(formik.errors.description)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>

                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="contract"
                        name="contract"
                        label="Contract"
                        variant="outlined"
                        value={formik.values.contract}
                        helpertext={
                          formik.touched.contract && formik.errors.contract
                        }
                        error={
                          formik.touched.contract &&
                          Boolean(formik.errors.contract)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="salary"
                        name="salary"
                        label="Salary"
                        variant="outlined"
                        value={formik.values.salary}
                        helpertext={
                          formik.touched.salary && formik.errors.salary
                        }
                        error={
                          formik.touched.salary && Boolean(formik.errors.salary)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="experience"
                        name="experience"
                        label="Experience"
                        variant="outlined"
                        value={formik.values.experience}
                        helpertext={
                          formik.touched.experience && formik.errors.experience
                        }
                        error={
                          formik.touched.experience &&
                          Boolean(formik.errors.experience)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="study"
                        name="study"
                        label="Study"
                        variant="outlined"
                        value={formik.values.study}
                        helpertext={formik.touched.study && formik.errors.study}
                        error={
                          formik.touched.study && Boolean(formik.errors.study)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="languages"
                        name="languages"
                        label="Languages"
                        variant="outlined"
                        value={formik.values.languages}
                        helpertext={
                          formik.touched.languages && formik.errors.languages
                        }
                        error={
                          formik.touched.languages &&
                          Boolean(formik.errors.languages)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="responsibility"
                        name="responsibility"
                        label="Responsibility"
                        variant="outlined"
                        value={formik.values.responsibility}
                        helpertext={
                          formik.touched.responsibility &&
                          formik.errors.responsibility
                        }
                        error={
                          formik.touched.responsibility &&
                          Boolean(formik.errors.responsibility)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="employesNeeded"
                        name="employesNeeded"
                        label="EmployesNeeded"
                        variant="outlined"
                        value={formik.values.employesNeeded}
                        helpertext={
                          formik.touched.employesNeeded &&
                          formik.errors.employesNeeded
                        }
                        error={
                          formik.touched.employesNeeded &&
                          Boolean(formik.errors.employesNeeded)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>
                    <div className="form-group label-floating is-empty"></div>
                  </div>
                </div>
                <div className="row mb30">
                  <div className="col col-lg-12">
                    <h6>Upload Logo</h6>
                  </div>
                  <div className="col col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="file-upload">
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        label="Image"
                        variant="outlined"
                        accept="image/*"
                        onChange={selectFile}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-12">
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary full-width"
                    >
                      Hire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

const yupSchema = Yup.object({
  title: Yup.string()
    .min(8, "Minimum 3 caractéres")
    .max(40, "Maximum 40 caractéres")
    .required("Champs requis!"),
  description: Yup.string()
    .min(7, "Minimum 7 caractéres")
    .max(80, "Maximum 80 caractéres")
    .required("Champs requis!"),
});

export default HiringForm;
