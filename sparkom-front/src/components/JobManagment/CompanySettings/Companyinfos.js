import { TextField } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  selectCompanies,
  fetchCompanies,
  // populateCompanies,
  // setErrors,
} from "../../../store/slices/company";
import { useDispatch, useSelector } from "react-redux";
import { activeUserSelector } from "../../../store/slices/auth";
// import { queryApi } from "../../../utils/queryApi";

function Companyinfos() {
  const [Compdetails, setCompdetails] = useState(false);
  const dispatch = useDispatch();
  const [companies] = useSelector(selectCompanies);
  const activeUser = useSelector(activeUserSelector);
  useEffect(() => {
    //FIXME:
    // const [res, err] = await queryApi("company/showcompanies");
    // if (err) {
    //   dispatch(setErrors(err));
    // } else {
    //   dispatch(populateCompanies(res));
    // }
    dispatch(fetchCompanies());
    setCompdetails(
      companies.filter((comp) => comp.company_owner === activeUser._id)
    );
  }, [dispatch, activeUser, companies]);
  return (
    <>
      <div className="main-header">
        <div className="content-bg-wrap bg-events" />
        <div className="container">
          <div className="row">
            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div className="main-header-content">
                <h1>Company Informations</h1>
                <p>Update Your Company informations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        {/*first Column*/}
        <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="form-group label-floating">
            <TextField
              className="is-invalid"
              id="title"
              name="title"
              label={Compdetails[0].company_details}
              variant="outlined"
              fullWidth
            />
          </div>

          <div className="form-group label-floating">
            <TextField
              className="is-invalid"
              id="details"
              name="details"
              label={Compdetails[0].company_name}
              variant="outlined"
              fullWidth
            />
          </div>
        </div>
        {/* Column 2 Start */}
        <div className="col-12 col-sm-6 col-md-6">
          <button className="btn btn-secondary btn-lg full-width">
            Restore all Attributes
          </button>
        </div>
        <div className="col-12 col-sm-6 col-md-6">
          <button className="btn btn-primary btn-lg full-width">
            Save all Changes
          </button>
        </div>
      </Container>
    </>
  );
}

export default Companyinfos;
