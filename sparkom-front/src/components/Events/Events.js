import { React, useEffect } from "react";

import "../../assets/css/Sidebar.css";
import "../../assets/css/Widgets.css";
import "../../assets/css/main.css";
import pdf from "../../assets/img/avatar49-sm.jpg";
import pdf1 from "../../assets/img/avatar9-sm.jpg";

import { useHistory } from "react-router-dom";

import { useServerApi } from "../../hooks/useServerApi";

export default function Events(props) {
  const [events] = useServerApi("group/getev");
  console.log(events);

  const history = useHistory();
  const Direction = (id) => {
    history.replace("/DFe/" + id);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <div className="ui-block-title">
                <div className="h6 title">GroupName’s Events</div>
                <div style={{ float: "right" }}>
                  <a
                    onClick={() => Direction(props.dm._id)}
                    data-toggle="modal"
                    data-target="#create-photo-album"
                    className="btn btn-primary btn-md-2"
                  >
                    Create Event
                  </a>
                </div>
                <a href="." className="more">
                  <svg className="olymp-three-dots-icon">
                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="ui-block">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">UPCOMING EVENTS 2021</h6>
              </div>
              <table className="event-item-table">
                {events?.map((wa, index) => (
                  <tbody>
                    <tr className="event-item">
                      <td className="upcoming">
                        <div className="date-event">
                          <svg className="olymp-small-calendar-icon">
                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-calendar-icon" />
                          </svg>
                          <span className="day">{wa.Date}</span>
                          <span className="month">may</span>
                        </div>
                      </td>
                      <td className="author">
                        <div className="event-author inline-items">
                          <div className="author-thumb">
                            <img  src={process.env.REACT_APP_API_URL_UPLOADS + "/" + wa.Image} alt="author" />
                          </div>
                          <div className="author-date">
                            <a href="." className="author-name h6">
                              {wa.name}
                            </a>
                            <time
                              className="published"
                              dateTime="2017-03-24T18:18"
                            >
                              Saturday at 9:00pm
                            </time>
                          </div>
                        </div>
                      </td>
                      <td className="location">
                        <div className="place inline-items">
                          <svg className="olymp-add-a-place-icon">
                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-a-place-icon" />
                          </svg>
                          <span>{wa.adresse}</span>
                        </div>
                      </td>
                      <td className="description">
                        <p className="description">{wa.description}</p>
                      </td>
                      <td className="users">
                        <ul className="friends-harmonic">
                          <li>
                            <a className="with-text">
                              {wa.Participants.length}
                            </a>
                          </li>
                          <li className="with-text">Will Assist</li>
                        </ul>
                      </td>
                      <td className="add-event">
                        <a
                          href="20-CalendarAndEvents-MonthlyCalendar.html"
                          className="btn btn-breez btn-sm"
                        >
                          Join
                        </a>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      <a className="back-to-top" href=".">
        <img
          src="svg-icons/back-to-top.svg"
          alt="arrow"
          className="back-icon"
        />
      </a>
    </div>
  );
}
