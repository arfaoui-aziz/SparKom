import AccountSettings from "./AccountSettings";
import ChangePassword from "./ChangePassword";
import EducationEmployement from "./EducationEmployement";
import PersonalInformation from "./PersonalInformation";
const MainSettings = () => {
  return (
    <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
      <div class="ui-block">
        <div class="ui-block-title">
          <h6 class="title">Account Settings</h6>
        </div>
        <div class="ui-block-content">
          <form>
            <div class="row">
              <AccountSettings />
              {/* <PersonalInformation /> */}
              {/* <ChangePassword /> */}
              {/* <EducationEmployement /> */}
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

          {/*end Personal Account Settings Form */}
        </div>
      </div>
    </div>
  );
};

export default MainSettings;
