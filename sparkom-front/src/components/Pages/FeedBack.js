import React, { Component } from "react";
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet
import { activeUserSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
class FeedBack extends Component {
    
  render() {
      
    var ok = ["Bad", "Normal", "good"];
    // See al=l customizable props below
    var mail = localStorage.getItem("email");
    return (
      <Feedback
        emailDefaultValue={"eyabellil44@gmail.com"}
        projectId="6092267ce2cb6100047099ea"
        feedbackTypes={["Bad", "Normal", "Good"]}
      />
    );
  }
}
export default FeedBack;