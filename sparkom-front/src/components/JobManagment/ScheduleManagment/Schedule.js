import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import PopUp from "./PopUp";
import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { queryApi } from "../../../utils/queryApi";
import { activeUserSelector } from "../../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";

import { useHistory, Redirect } from "react-router-dom";
import {
  populateschedule,
  setErrors,
  selectschedules,
} from "../../../store/slices/schedule";
import DeletePopup from "./DeletePopup";
function Schedule() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const history = useHistory();
  const activeUser = useSelector(activeUserSelector);
  const [schedules, err] = useSelector(selectschedules);

  useEffect(async () => {
    const [res, err] = await queryApi(
      "company/showbyOwnerId/" + activeUser._id
    );
    console.log(res, "componer-------");
    const comp = res[0];
    if (!comp) {
      history.push("/me");
      return;
    }

    const [res2, err2] = await queryApi("job/showbyCompId/" + comp._id);
    console.log(res2, "jobs--------");
    res2.forEach(async (job) => {
      const [res3, err3] = await queryApi("postedon/showbyJob/" + job._id);
      console.log(res3, "post--------");
      let users = [...applicants];
      res3.forEach((post) => {
        users.push(post.user);
      });
      setApplicants(users);

      console.log(applicants, users, "--------------app");
    });

    const [res4, err4] = await queryApi(
      "schedule/getScheduleByUserId/" + activeUser._id
    );
    if (err) {
      dispatch(setErrors(err4));
    } else {
      dispatch(populateschedule(res4));
    }
    console.log(res4, "Scheduel-------");
  }, []);
  

  
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = [
    {
      Id: 1,
      Subject: "Explosion of Betelgeuse Star",
      StartTime: new Date(2018, 1, 15, 9, 30),
      EndTime: new Date(2018, 1, 15, 11, 0),
    },
    {
      Id: 2,
      Subject: "Thule Air Crash Report",
      StartTime: new Date(2018, 1, 12, 12, 0),
      EndTime: new Date(2018, 1, 12, 14, 0),
    },
    {
      Id: 3,
      Subject: "Blue Moon Eclipse",
      StartTime: new Date(2018, 1, 13, 9, 30),
      EndTime: new Date(2018, 1, 13, 11, 0),
    },
    {
      Id: 4,
      Subject: "Meteor Showers in 2018",
      StartTime: new Date(2018, 1, 14, 13, 0),
      EndTime: new Date(2018, 1, 14, 14, 30),
    },
  ];

  return (
    <div>
      <ScheduleComponent
        selectedDate={new Date()}
        eventSettings={{ dataSource: schedules }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
      <div></div>
      <div >
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add RDV
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Rdv</DialogTitle>

        <PopUp users={applicants} />
      </Dialog>


      <div >
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClickOpen2}
                      >
                        Delete RDV
                      </Button>
                    </div>
        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Delete RDV</DialogTitle>
  
          <DeletePopup users={applicants}/>
        </Dialog>

    </div>
  );
}

export default Schedule;
