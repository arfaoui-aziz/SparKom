import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div class="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 responsive-display-none">
      <div class="ui-block">
        <div class="your-profile">
          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div class="card">
              <div class="card-header" role="tab" id="headingOne">
                <h6 class="mb-0">Profile Settings</h6>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <ul class="your-profile-menu">
                  <li>
                    <Link to="/settings">Account Settings</Link>
                  </li>
                  <li>
                    <Link to="/settings/perso">Personal Information</Link>
                  </li>
                  <li>
                    <Link to="/settings/changepwd">Change Password</Link>
                  </li>

                  <li>
                    <Link to="/settings/educ">Education and Employement</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="ui-block-title">
            <Link to="/me/notifs" class="h6 title">
              Notifications
            </Link>
            <Link to="/me/notifs" class="items-round-little bg-primary">
              2
            </Link>
          </div>

          <div class="ui-block-title">
            <Link to="/me/notifs" class="h6 title">
              My CV
            </Link>
          </div>
          <div class="ui-block-title">
            <Link to="/me/messages" class="h6 title">
              Chat / Messages
            </Link>
          </div>
          <div class="ui-block-title">
            <Link to="/me/requests" class="h6 title">
              Friend Requests
            </Link>
            <Link to="/me/requests" class="items-round-little bg-blue">
              1
            </Link>
          </div>
        </div>

        {/* end Your Profile*/}
      </div>
    </div>
  );
};

export default SideBar;
