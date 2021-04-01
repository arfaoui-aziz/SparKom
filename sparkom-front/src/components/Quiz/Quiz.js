import React from "react";
import Widgets from "../Profile/Widgets";
import Header from "../Profile/Header";
import Sidebar from "../Profile/Sidebar";
import Questions from "./Questions";
import { Avatar } from "@material-ui/core";
import b1 from "../../assets/img/badge1.png";
import b2 from "../../assets/img/badge2.png";
import b3 from "../../assets/img/badge3.png";
import b4 from "../../assets/img/badge4.png";
import b5 from "../../assets/img/badge5.png";
import b6 from "../../assets/img/badge6.png";
import b7 from "../../assets/img/badge7.png";
export default function Quiz() {
  const QuizItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="app">
        {/* Header */}
        <Header />
        {/* App Body */}
        <div className="app__body">
          <div className="sidebar">
            {/* Top Sidebar */}
            <div className="sidebar__top">
              <img
                src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1791&q=80"
                alt=""
              />
              <Avatar className="sidebar__avatar" />
              <h2>Aziz Arfaoui</h2>
              <h4>My Badges</h4>
            </div>
            {/* Stats*/}
            <div className="sidebar__stats">
              <img src={b1} alt="" />
              &nbsp;
              <img src={b2} alt="" />
              &nbsp;
              <img src={b3} alt="" />
              &nbsp;
              <img src={b4} alt="" />
              &nbsp;
              <br />
              <br />
              <img src={b5} alt="" />
              &nbsp;&nbsp;
              <img src={b6} alt="" />
              &nbsp;&nbsp;
              <img src={b7} alt="" />
            </div>
            {/* End Stats */}
            <div className="sidebar__bottom">
              <p>Quizes</p>
              {QuizItem("Javascript")}
              {QuizItem("ReactJS")}
              {QuizItem("Angular")}
              {QuizItem("Java")}
            </div>
          </div>

          {/* Feed */}
 
          <Questions />
          {/* Widgets */}
          <Widgets />
        </div>
      </div>
    </div>
  );
}
