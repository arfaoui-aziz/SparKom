import MainSettings from "./MainSettings";
import Header from "./Header";
import SettingRes from "./SettingRes";
import SideBar from "./SideBar";
const Settings = () => {
  return (
    <>
      <Header />
      <SettingRes />
      <div class="container">
        <div class="row">
          <SideBar />
          <MainSettings />
        </div>
      </div>
    </>
  );
};

export default Settings;
