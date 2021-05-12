import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../../assets/css/Jobs.css";

function JobList(props) {
  useEffect(() => {
    console.log(props.job.image, props.job.title, "******************");
  }, [props.job.image, props.job.title]);
  return (
    <div className="jobcontainer">
      <div className="jobcontent">
        <img
          src={`${process.env.REACT_APP_API_URL}/${props.job.image}`}
          className="jobicon"
          alt="jobImage"
        />
        <Link to={`/job/${props.job._id}`} style={{ textDecoration: "none" }}>
          <a href="job" class="jobtitle">
            {" "}
            {props.job.title}
          </a>
        </Link>

        <p className="jobdesc">
          The user experience designer posistion exists to create compeling and
          elegant digital user experience through{" "}
        </p>
        <div>
          <Button href="#" className="jobtags">
            Full Time
          </Button>
          <Button href="#" className="jobtags">
            Min.1Year
          </Button>
          <Button href="#" className="jobtags">
            Senior Level
          </Button>
        </div>
        <div className="mb-2">
          <Button
            variant="primary"
            size=""
            className="jobbutton"
            href={`/job/${props.job._id}`}
          >
            Apply Now
          </Button>{" "}
          <Button variant="secondary" size="lg">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JobList;
