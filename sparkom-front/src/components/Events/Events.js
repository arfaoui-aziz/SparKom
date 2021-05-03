import { React, useEffect, useState } from "react";

import "../../assets/css/Sidebar.css";
import "../../assets/css/Widgets.css";
import "../../assets/css/main.css";
import pdf from "../../assets/img/avatar49-sm.jpg";
import pdf1 from "../../assets/img/avatar9-sm.jpg";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useServerApi } from "../../hooks/useServerApi";
import { useDispatch } from "react-redux";
import { JoinEvent, LeaveEvent } from "../../redux/actions/groupActions";
import { queryServerApi } from "../../utils/queryApi";
import { activeUserSelector, thistoken } from "../../store/slices/auth";
import { useSelector } from "react-redux";
export default function Events({ props, events }) {
  const history = useHistory();
  const Direction = (id) => {
    history.replace("/DFe/" + id);
  };
  const dispatch = useDispatch();
  const activeUser = useSelector(activeUserSelector);
  const token = useSelector(thistoken);
  const [members, setmembers] = useState([]);
  const [member, setmember] = useState(false);
  //const CreatedBy = props.CreatedBy._id || props.CreatedBy;

  useEffect(() => {
    setmembers(events && events.Participants);
    checkmember(events && events.Participants);
  }, [events.Participants]);

  function checkmember(members) {
    let match = members.indexOf(activeUser._id) !== -1;
    setmember(match);
  }

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
                <tbody>
                  <tr className="event-item">
                    <td className="upcoming">
                      <div className="date-event">
                        <svg className="olymp-small-calendar-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-calendar-icon" />
                        </svg>
                        <span className="day">{events.Date}</span>
                        <span className="month">may</span>
                      </div>
                    </td>
                    <td className="author">
                      <div className="event-author inline-items">
                        <div className="author-thumb">
                          <img alt="author" />
                        </div>
                        <div className="author-date">
                          <a href="." className="author-name h6">
                            {events.name}
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
                        <span>{events.adresse}</span>
                      </div>
                    </td>
                    <td className="description">
                      <p className="description">{events.description}</p>
                    </td>
                    <td className="users">
                      <ul className="friends-harmonic">
                        <li>
                          <a className="with-text">
                            {events.Participants.length}
                          </a>
                        </li>
                        <li className="with-text">Will Assist</li>
                      </ul>
                    </td>

                    {member ? (
                      <>
                        <td className="add-event">
                        <a
                            className="btn btn-breez btn-sm"
                            onClick={() =>
                              dispatch(
                                LeaveEvent(token, activeUser._id, events._id)
                              )
                            }
                          >
                            Leave
                          </a>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="add-event">
                          <a
                            className="btn btn-breez btn-sm"
                            onClick={() =>
                              dispatch(
                                JoinEvent(token, activeUser._id, events._id)
                              )
                            }
                          >
                            Join
                          </a>
                        </td>
                      </>
                    )}
                  </tr>
                </tbody>
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
