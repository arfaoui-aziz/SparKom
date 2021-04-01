import Header from "./Header";

import SideBar from "./SideBar";
import { Route, Switch } from "react-router-dom";
import AccountSettings from "./AccountSettings";
import ChangePassword from "./ChangePassword";
import EducationEmployement from "./EducationEmployement";
import PersonalInformation from "./PersonalInformation";
const Settings = (props) => {
  return (
    <>
      <div class="container">
        <div class="row">
          <Header />

          <SideBar />
          {/* main content */}
          <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
            <div class="ui-block">
              <div class="ui-block-title">
                <h6 class="title">Account Settings</h6>
              </div>
              <div class="ui-block-content">
                <form>
                  <div class="row">
                    {/* <AccountSettings /> */}

                    <Switch>
                      <Route
                        path={props.match.url + "/perso"}
                        component={PersonalInformation}
                      />
                      <Route
                        path={props.match.url + "/changepwd"}
                        component={ChangePassword}
                      />
                      <Route
                        path={props.match.url + "/educ"}
                        component={EducationEmployement}
                      />
                      <Route
                        path={props.match.url}
                        component={AccountSettings}
                      />
                    </Switch>
                    <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                      <button class="btn btn-secondary btn-lg full-width">
                        Restore all Attributes
                      </button>
                    </div>
                    <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                      <button class="btn btn-primary btn-lg full-width">
                        Save all Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/*end  main content */}
        </div>
      </div>
    </>
  );
};

export default Settings;
