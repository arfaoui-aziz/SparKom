import SetOptions from "./SetOptions";

const AccountSettings = () => {
  return (
    <>
      <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
        <div class="form-group label-floating is-select"></div>
      </div>
      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <SetOptions
          title="Notifications Sound"
          description=" A sound will be played each time you receive a new activity
notification"
        />

        <SetOptions
          title="Notifications Email"
          description="  We’ll send you an email to your account each time you
      receive a new activity notification"
        />
        <SetOptions
          title="Friend’s Birthdays"
          description="Choose wheather or not receive notifications about your
      friend’s birthdays on your newsfeed"
        />

        <SetOptions
          title="Chat Message Sound"
          description="A sound will be played each time you receive a new message
      on an inactive chat window"
        />
        <SetOptions
          title="Account Privacy"
          description="Public account or Private visible only for Friends"
        />
      </div>
    </>
  );
};

export default AccountSettings;
