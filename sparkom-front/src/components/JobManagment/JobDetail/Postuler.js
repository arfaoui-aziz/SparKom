import React from "react";

function Postuler() {
  return (
    <div>
      <div className="applyform ">
        {/* Tab panes */}
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="home"
            role="tabpanel"
            data-mh="log-tab"
          >
            <div className="title h6">Application Form</div>
            <form className="content">
              <div className="row">
                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <label className="control-label">Message</label>
                    <input className="form-control" placeholder type="text" />
                  </div>
                </div>

                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group date-time-picker label-floating">
                    <label className="control-label">Starting Date</label>
                    <input name="datetimepicker" defaultValue="04/06/2021" />
                    <span className="input-group-addon">
                      <svg className="olymp-calendar-icon">
                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                      </svg>
                    </span>
                  </div>

                  <a href="#top" className="btn btn-blue btn-lg full-width">
                    Apply Now
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div
            className="tab-pane"
            id="profile"
            role="tabpanel"
            data-mh="log-tab"
          >
            <div className="title h6">Login to your Account</div>
            <form className="content">
              <div className="row">
                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <label className="control-label">Your Email</label>
                    <input className="form-control" placeholder type="email" />
                  </div>
                  <div className="form-group label-floating is-empty">
                    <label className="control-label">Your Password</label>
                    <input
                      className="form-control"
                      placeholder
                      type="password"
                    />
                  </div>
                  <div className="remember">
                    <div className="checkbox">
                      <label>
                        <input name="optionsCheckboxes" type="checkbox" />
                        Remember Me
                      </label>
                    </div>
                    <a href="#top" className="forgot">
                      Forgot my Password
                    </a>
                  </div>
                  <a href="#top" className="btn btn-lg btn-primary full-width">
                    Login
                  </a>
                  <div className="or" />
                  <a
                    href="#top"
                    className="btn btn-lg bg-facebook full-width btn-icon-left"
                  >
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                    Login with Facebook
                  </a>
                  <a
                    href="#top"
                    className="btn btn-lg bg-twitter full-width btn-icon-left"
                  >
                    <i className="fab fa-twitter" aria-hidden="true" />
                    Login with Twitter
                  </a>
                  <p>
                    Don’t you have an account? <a href="#top">Register Now!</a>{" "}
                    it’s really simple and you can start enjoing all the
                    benefits!
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postuler;
