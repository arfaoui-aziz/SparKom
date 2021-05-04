import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import PopUp from "./PopUp"

function Schedule() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
        <div id="calendar-full-1" className="fc fc-ltr fc-unthemed">
          <div className="fc-toolbar">
            <div className="fc-left">
              <div className="fc-button-group">
                <button
                  type="button"
                  className="fc-prev-button fc-button fc-state-default fc-corner-left"
                >
                  <span className="fc-icon fc-icon-left-single-arrow" />
                </button>
              </div>
            </div>
            <div className="fc-center">
              <h6 className="date">
                April 14, <span>2017</span>
              </h6>
            </div>
            <ul className="nav nav-tabs fc-right" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#month"
                  role="tab"
                >
                  <svg className="olymp-month-calendar-icon">
                    <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-month-calendar-icon" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#week" role="tab">
                  <svg className="olymp-week-calendar-icon">
                    <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-week-calendar-icon" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#day" role="tab">
                  <svg className="olymp-day-calendar-icon">
                    <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-day-calendar-icon" />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="fc-right">
              <div className="fc-button-group">
                <button
                  type="button"
                  className="fc-next-button fc-button fc-state-default fc-corner-right"
                >
                  <span className="fc-icon fc-icon-right-single-arrow" />
                </button>
              </div>
            </div>
            <div className="fc-clear" />
          </div>
          <div className="fc-view-container" style={{}}>
            <div className="tab-content">
              <div className="tab-pane active" id="month" role="tabpanel">
                <div className="fc-view fc-month-view fc-basic-view" style={{}}>
                  <table>
                    <thead className="fc-head">
                      <tr>
                        <td className="fc-head-container fc-widget-header">
                          <div className="fc-row fc-widget-header">
                            <table>
                              <thead>
                                <tr>
                                  <th className="fc-day-header fc-widget-header fc-mon">
                                    Mon
                                  </th>
                                  <th className="fc-day-header fc-widget-header fc-tue">
                                    Tue
                                  </th>
                                  <th className="fc-day-header fc-widget-header fc-wed">
                                    Wed
                                  </th>
                                  <th className="fc-day-header fc-widget-header fc-thu">
                                    Thu
                                  </th>
                                  <th className="fc-day-header fc-widget-header fc-fri">
                                    Fri
                                  </th>
                                  <th className="fc-day-header fc-widget-header fc-sat">
                                    Sat
                                  </th>
                                  <th className="fc-day-header fc-widget-header fc-sun">
                                    Sun
                                  </th>
                                </tr>
                              </thead>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody className="fc-body">
                      <tr>
                        <td className="fc-widget-content">
                          <div className="fc-day-grid-container" style={{}}>
                            <div className="fc-day-grid">
                              <div
                                className="fc-row fc-week fc-widget-content"
                                style={{ height: "103px" }}
                              >
                                <div className="fc-bg">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td
                                          className="fc-day fc-widget-content fc-mon fc-other-month fc-past"
                                          data-date="2017-03-27"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-tue fc-other-month fc-past"
                                          data-date="2017-03-28"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-wed fc-other-month fc-past"
                                          data-date="2017-03-29"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-thu fc-other-month fc-past"
                                          data-date="2017-03-30"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-fri fc-other-month fc-past"
                                          data-date="2017-03-31"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sat fc-past"
                                          data-date="2017-04-01"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sun fc-past"
                                          data-date="2017-04-02"
                                        />
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="fc-content-skeleton">
                                  <table>
                                    <thead>
                                      <tr>
                                        <td
                                          className="fc-day-number fc-mon fc-other-month fc-past"
                                          data-date="2017-03-27"
                                        >
                                          27
                                        </td>
                                        <td
                                          className="fc-day-number fc-tue fc-other-month fc-past"
                                          data-date="2017-03-28"
                                        >
                                          28
                                        </td>
                                        <td
                                          className="fc-day-number fc-wed fc-other-month fc-past"
                                          data-date="2017-03-29"
                                        >
                                          29
                                        </td>
                                        <td
                                          className="fc-day-number fc-thu fc-other-month fc-past"
                                          data-date="2017-03-30"
                                        >
                                          30
                                        </td>
                                        <td
                                          className="fc-day-number fc-fri fc-other-month fc-past"
                                          data-date="2017-03-31"
                                        >
                                          31
                                        </td>
                                        <td
                                          className="fc-day-number fc-sat fc-past"
                                          data-date="2017-04-01"
                                        >
                                          1
                                        </td>
                                        <td
                                          className="fc-day-number fc-sun fc-past"
                                          data-date="2017-04-02"
                                        >
                                          2
                                        </td>
                                      </tr>
                                    </thead>
                                  </table>
                                </div>
                              </div>
                              <div
                                className="fc-row fc-week fc-widget-content"
                                style={{ height: "103px" }}
                              >
                                <div className="fc-bg">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td
                                          className="fc-day fc-widget-content fc-mon fc-past"
                                          data-date="2017-04-03"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-tue fc-past"
                                          data-date="2017-04-04"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-wed fc-past"
                                          data-date="2017-04-05"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-thu fc-past"
                                          data-date="2017-04-06"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-fri fc-today fc-state-highlight"
                                          data-date="2017-04-07"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sat fc-future"
                                          data-date="2017-04-08"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sun fc-future"
                                          data-date="2017-04-09"
                                        />
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="fc-content-skeleton">
                                  <table>
                                    <thead>
                                      <tr>
                                        <td
                                          className="fc-day-number fc-mon fc-past"
                                          data-date="2017-04-03"
                                        >
                                          3
                                        </td>
                                        <td
                                          className="fc-day-number fc-tue fc-past"
                                          data-date="2017-04-04"
                                        >
                                          4
                                        </td>
                                        <td
                                          className="fc-day-number fc-wed fc-past"
                                          data-date="2017-04-05"
                                        >
                                          5
                                        </td>
                                        <td
                                          className="fc-day-number fc-thu fc-past"
                                          data-date="2017-04-06"
                                        >
                                          6
                                        </td>
                                        <td
                                          className="fc-day-number fc-fri fc-today fc-state-highlight"
                                          data-date="2017-04-07"
                                        >
                                          7
                                        </td>
                                        <td
                                          className="fc-day-number fc-sat fc-future"
                                          data-date="2017-04-08"
                                        >
                                          8
                                          <ul className="calendar-block-events">
                                            <li
                                              data-toggle="modal"
                                              data-target="#public-event"
                                            >
                                              <span className="event-status b-day" />
                                              Chris Greyson’s Bday
                                            </li>
                                            <li
                                              data-toggle="modal"
                                              data-target="#private-event"
                                            >
                                              <span className="event-status completed" />
                                              Make Dinner Plans...
                                            </li>
                                          </ul>
                                        </td>
                                        <td
                                          className="fc-day-number fc-sun fc-future"
                                          data-date="2017-04-09"
                                        >
                                          9
                                        </td>
                                      </tr>
                                    </thead>
                                  </table>
                                </div>
                              </div>
                              <div
                                className="fc-row fc-week fc-widget-content"
                                style={{ height: "103px" }}
                              >
                                <div className="fc-bg">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td
                                          className="fc-day fc-widget-content fc-mon fc-future"
                                          data-date="2017-04-10"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-tue fc-future"
                                          data-date="2017-04-11"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-wed fc-future"
                                          data-date="2017-04-12"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-thu fc-future"
                                          data-date="2017-04-13"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-fri fc-future"
                                          data-date="2017-04-14"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sat fc-future"
                                          data-date="2017-04-15"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sun fc-future"
                                          data-date="2017-04-16"
                                        />
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="fc-content-skeleton">
                                  <table>
                                    <thead>
                                      <tr>
                                        <td
                                          className="fc-day-number fc-mon fc-future"
                                          data-date="2017-04-10"
                                        >
                                          10
                                        </td>
                                        <td
                                          className="fc-day-number fc-tue fc-future"
                                          data-date="2017-04-11"
                                        >
                                          11
                                        </td>
                                        <td
                                          className="fc-day-number fc-wed fc-future"
                                          data-date="2017-04-12"
                                        >
                                          12
                                        </td>
                                        <td
                                          className="fc-day-number fc-thu fc-future"
                                          data-date="2017-04-13"
                                        >
                                          13
                                        </td>
                                        <td
                                          className="fc-day-number fc-fri fc-future"
                                          data-date="2017-04-14"
                                        >
                                          14
                                        </td>
                                        <td
                                          className="fc-day-number fc-sat fc-future"
                                          data-date="2017-04-15"
                                        >
                                          15
                                        </td>
                                        <td
                                          className="fc-day-number fc-sun fc-future"
                                          data-date="2017-04-16"
                                        >
                                          16
                                        </td>
                                      </tr>
                                    </thead>
                                  </table>
                                </div>
                              </div>
                              <div
                                className="fc-row fc-week fc-widget-content"
                                style={{ height: "103px" }}
                              >
                                <div className="fc-bg">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td
                                          className="fc-day fc-widget-content fc-mon fc-future"
                                          data-date="2017-04-17"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-tue fc-future"
                                          data-date="2017-04-18"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-wed fc-future"
                                          data-date="2017-04-19"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-thu fc-future"
                                          data-date="2017-04-20"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-fri fc-future"
                                          data-date="2017-04-21"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sat fc-future"
                                          data-date="2017-04-22"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sun fc-future"
                                          data-date="2017-04-23"
                                        />
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="fc-content-skeleton">
                                  <table>
                                    <thead>
                                      <tr>
                                        <td
                                          className="fc-day-number fc-mon fc-future"
                                          data-date="2017-04-17"
                                        >
                                          17
                                        </td>
                                        <td
                                          className="fc-day-number fc-tue fc-future"
                                          data-date="2017-04-18"
                                        >
                                          18
                                        </td>
                                        <td
                                          className="fc-day-number fc-wed fc-future"
                                          data-date="2017-04-19"
                                        >
                                          19
                                        </td>
                                        <td
                                          className="fc-day-number fc-thu fc-future"
                                          data-date="2017-04-20"
                                        >
                                          20
                                        </td>
                                        <td
                                          className="fc-day-number fc-fri fc-future"
                                          data-date="2017-04-21"
                                        >
                                          21
                                        </td>
                                        <td
                                          className="fc-day-number fc-sat fc-future"
                                          data-date="2017-04-22"
                                        >
                                          22
                                        </td>
                                        <td
                                          className="fc-day-number fc-sun fc-future"
                                          data-date="2017-04-23"
                                        >
                                          23
                                        </td>
                                      </tr>
                                    </thead>
                                  </table>
                                </div>
                              </div>
                              <div
                                className="fc-row fc-week fc-widget-content"
                                style={{ height: "103px" }}
                              >
                                <div className="fc-bg">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td
                                          className="fc-day fc-widget-content fc-mon fc-future"
                                          data-date="2017-04-24"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-tue fc-future"
                                          data-date="2017-04-25"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-wed fc-future"
                                          data-date="2017-04-26"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-thu fc-future"
                                          data-date="2017-04-27"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-fri fc-future"
                                          data-date="2017-04-28"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sat fc-future"
                                          data-date="2017-04-29"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sun fc-future"
                                          data-date="2017-04-30"
                                        />
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="fc-content-skeleton">
                                  <table>
                                    <thead>
                                      <tr>
                                        <td
                                          className="fc-day-number fc-mon fc-future"
                                          data-date="2017-04-24"
                                        >
                                          24
                                        </td>
                                        <td
                                          className="fc-day-number fc-tue fc-future"
                                          data-date="2017-04-25"
                                        >
                                          25
                                        </td>
                                        <td
                                          className="fc-day-number fc-wed fc-future"
                                          data-date="2017-04-26"
                                        >
                                          26
                                          <ul className="calendar-block-events">
                                            <li
                                              data-toggle="modal"
                                              data-target="#public-event"
                                            >
                                              <span className="event-status uncompleted" />
                                              Breakfast at the...
                                            </li>
                                            <li
                                              data-toggle="modal"
                                              data-target="#private-event"
                                            >
                                              <span className="event-status completed" />
                                              Send the new...
                                            </li>
                                            <li
                                              data-toggle="modal"
                                              data-target="#public-event"
                                            >
                                              <span className="event-status uncompleted" />
                                              Take Querty to the...
                                            </li>
                                          </ul>
                                        </td>
                                        <td
                                          className="fc-day-number fc-thu fc-future"
                                          data-date="2017-04-27"
                                        >
                                          27
                                        </td>
                                        <td
                                          className="fc-day-number fc-fri fc-future"
                                          data-date="2017-04-28"
                                        >
                                          28
                                        </td>
                                        <td
                                          className="fc-day-number fc-sat fc-future"
                                          data-date="2017-04-29"
                                        >
                                          29
                                        </td>
                                        <td
                                          className="fc-day-number fc-sun fc-future"
                                          data-date="2017-04-30"
                                        >
                                          30
                                          <ul className="calendar-block-events">
                                            <li
                                              data-toggle="modal"
                                              data-target="#public-event"
                                            >
                                              <span className="event-status uncompleted" />
                                              Videocall to talk...
                                            </li>
                                            <li
                                              data-toggle="modal"
                                              data-target="#private-event"
                                            >
                                              <span className="event-status uncompleted" />
                                              Jenny’s Birthday...
                                            </li>
                                          </ul>
                                        </td>
                                      </tr>
                                    </thead>
                                  </table>
                                </div>
                              </div>
                              <div
                                className="fc-row fc-week fc-widget-content"
                                style={{ height: "108px" }}
                              >
                                <div className="fc-bg">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td
                                          className="fc-day fc-widget-content fc-mon fc-other-month fc-future"
                                          data-date="2017-05-01"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-tue fc-other-month fc-future"
                                          data-date="2017-05-02"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-wed fc-other-month fc-future"
                                          data-date="2017-05-03"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-thu fc-other-month fc-future"
                                          data-date="2017-05-04"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-fri fc-other-month fc-future"
                                          data-date="2017-05-05"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sat fc-other-month fc-future"
                                          data-date="2017-05-06"
                                        />
                                        <td
                                          className="fc-day fc-widget-content fc-sun fc-other-month fc-future"
                                          data-date="2017-05-07"
                                        />
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="fc-content-skeleton">
                                  <table>
                                    <thead>
                                      <tr>
                                        <td
                                          className="fc-day-number fc-mon fc-other-month fc-future"
                                          data-date="2017-05-01"
                                        >
                                          1
                                        </td>
                                        <td
                                          className="fc-day-number fc-tue fc-other-month fc-future"
                                          data-date="2017-05-02"
                                        >
                                          2
                                        </td>
                                        <td
                                          className="fc-day-number fc-wed fc-other-month fc-future"
                                          data-date="2017-05-03"
                                        >
                                          3
                                        </td>
                                        <td
                                          className="fc-day-number fc-thu fc-other-month fc-future"
                                          data-date="2017-05-04"
                                        >
                                          4
                                        </td>
                                        <td
                                          className="fc-day-number fc-fri fc-other-month fc-future"
                                          data-date="2017-05-05"
                                        >
                                          5
                                        </td>
                                        <td
                                          className="fc-day-number fc-sat fc-other-month fc-future"
                                          data-date="2017-05-06"
                                        >
                                          6
                                        </td>
                                        <td
                                          className="fc-day-number fc-sun fc-other-month fc-future"
                                          data-date="2017-05-07"
                                        >
                                          7
                                        </td>
                                      </tr>
                                    </thead>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">WEDNESDAY, MARCH 30</h6>
                </div>
                <div className="today-events calendar">
                  <div className="list">
                    <div className="control-block-button">
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        Add RDV
                      </Button>
                    </div>
                    <div
                      id="accordion-3"
                      role="tablist"
                      aria-multiselectable="true"
                      className="day-event"
                    >
                      <div className="card">
                        <div className="card-header" role="tab" id="headingOne-3">
                          <div className="event-time">
                            <time
                              className="published"
                              dateTime="2017-03-24T18:18"
                            >
                              10:50am
                            </time>
                            <div className="more">
                              <svg className="olymp-three-dots-icon">
                                <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                              </svg>
                              <ul className="more-dropdown">
                                <li>
                                  <a href="#">Mark as Completed</a>
                                </li>
                                <li>
                                  <a href="#">Delete Event</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h5 className="mb-0 title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Videocall to talk with the agency’s new client
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                              <span
                                className="event-status-icon"
                                data-toggle="modal"
                                data-target="#public-event"
                              >
                                <svg
                                  className="olymp-calendar-icon"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  data-original-title="UNCOMPLETED"
                                >
                                  <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                                </svg>
                              </span>
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                        >
                          <div className="card-body">
                            I have to remeber to be a little earlier at the agency
                            to discuss with the guys all the questions we have for
                            our new client and to show them the new logo.
                          </div>
                          <div className="place inline-items">
                            <svg className="olymp-add-a-place-icon">
                              <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-add-a-place-icon" />
                            </svg>
                            <span>Daydreamz Agency</span>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div
                          className="card-header"
                          role="tab"
                          id="headingThree-3"
                        >
                          <div className="event-time">
                            <time
                              className="published"
                              dateTime="2017-03-24T18:18"
                            >
                              10:50am
                            </time>
                            <div className="more">
                              <svg className="olymp-three-dots-icon">
                                <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                              </svg>
                              <ul className="more-dropdown">
                                <li>
                                  <a href="#">Mark as Completed</a>
                                </li>
                                <li>
                                  <a href="#">Delete Event</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h5 className="mb-0 title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion-3"
                              href="#collapseThree-3"
                              aria-expanded="false"
                              aria-controls="collapseThree-3"
                            >
                              Jenny’s Birthday Party
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                              <span
                                className="event-status-icon"
                                data-toggle="modal"
                                data-target="#private-event"
                              >
                                <svg
                                  className="olymp-calendar-icon"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  data-original-title="UNCOMPLETED"
                                >
                                  <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                                </svg>
                              </span>
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseThree-3"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                        >
                          <div className="card-body">
                            Hi Guys! I propose to go a litle earlier at the agency
                            to have breakfast and talk a little more about the new
                            design project we have been working on. Cheers!
                          </div>
                          <div className="place inline-items">
                            <svg className="olymp-add-a-place-icon">
                              <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-add-a-place-icon" />
                            </svg>
                            <span>Daydreamz Agency</span>
                          </div>
                          <ul className="friends-harmonic inline-items">
                            <li>
                              <a href="#">
                                <img
                                  src="./assets/img/friend-harmonic5.jpg"
                                  alt="friend"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="./assets/img/friend-harmonic10.jpg"
                                  alt="friend"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="./assets/img/friend-harmonic7.jpg"
                                  alt="friend"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="./assets/img/friend-harmonic8.jpg"
                                  alt="friend"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="./assets/img/friend-harmonic2.jpg"
                                  alt="friend"
                                />
                              </a>
                            </li>
                            <li className="with-text">Will Assist</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="week" role="tabpanel">
                <div
                  className="fc-view fc-agendaWeek-view fc-agenda-view"
                  style={{}}
                >
                  <table>
                    <thead className="fc-head">
                      <tr>
                        <td className="fc-head-container fc-widget-header">
                          <div
                            className="fc-row fc-widget-header"
                            style={{ marginRight: "16.333px" }}
                          >
                            <table>
                              <thead>
                                <tr>
                                  <th
                                    className="fc-axis fc-widget-header"
                                    style={{ width: "1px" }}
                                  />
                                  <th
                                    className="fc-day-header fc-widget-header fc-mon"
                                    data-date="2017-04-10"
                                  >
                                    SUNDAY 20
                                  </th>
                                  <th
                                    className="fc-day-header fc-widget-header fc-tue"
                                    data-date="2017-04-11"
                                  >
                                    MONDAY 21
                                  </th>
                                  <th
                                    className="fc-day-header fc-widget-header fc-wed"
                                    data-date="2017-04-12"
                                  >
                                    TUESDAY 22
                                  </th>
                                  <th
                                    className="fc-day-header fc-widget-header fc-thu"
                                    data-date="2017-04-13"
                                  >
                                    WEDNESDAY 23
                                  </th>
                                  <th
                                    className="fc-day-header fc-widget-header fc-fri"
                                    data-date="2017-04-14"
                                  >
                                    THURSDAY 24
                                  </th>
                                  <th
                                    className="fc-day-header fc-widget-header fc-sat"
                                    data-date="2017-04-15"
                                  >
                                    FRIDAY 25
                                  </th>
                                  <th
                                    className="fc-day-header fc-widget-header fc-sun"
                                    data-date="2017-04-16"
                                  >
                                    SATURDAY 26
                                  </th>
                                </tr>
                              </thead>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody className="fc-body">
                      <tr>
                        <td className="fc-widget-content">
                          <div
                            className="fc-time-grid-container fc-scroller"
                            style={{ height: "400px" }}
                          >
                            <div className="fc-time-grid">
                              <div className="fc-bg">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td
                                        className="fc-axis fc-widget-content"
                                        style={{ width: "1px" }}
                                      />
                                      <td
                                        className="fc-day fc-widget-content fc-mon fc-today fc-state-highlight"
                                        data-date="2017-04-10"
                                      />
                                      <td
                                        className="fc-day fc-widget-content fc-tue fc-future"
                                        data-date="2017-04-11"
                                      />
                                      <td
                                        className="fc-day fc-widget-content fc-wed fc-future"
                                        data-date="2017-04-12"
                                      />
                                      <td
                                        className="fc-day fc-widget-content fc-thu fc-future"
                                        data-date="2017-04-13"
                                      />
                                      <td
                                        className="fc-day fc-widget-content fc-fri fc-future"
                                        data-date="2017-04-14"
                                      />
                                      <td
                                        className="fc-day fc-widget-content fc-sat fc-future"
                                        data-date="2017-04-15"
                                      />
                                      <td
                                        className="fc-day fc-widget-content fc-sun fc-future"
                                        data-date="2017-04-16"
                                      />
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="fc-slats">
                                <table>
                                  <tbody>
                                    <tr data-time="06:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>6AM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="06:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="07:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>7AM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="07:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="08:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>8AM</span>
                                      </td>
                                      <td className="fc-widget-content">
                                        <ul className="calendar-block-events">
                                          <li
                                            data-toggle="modal"
                                            data-target="#public-event"
                                          >
                                            <span className="event-status uncompleted" />
                                            Breakfast at the Agency
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr data-time="08:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="09:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>9AM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="09:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="10:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>10AM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="10:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="11:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>11AM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="11:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="12:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>12PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="12:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="13:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>1PM</span>
                                      </td>
                                      <td className="fc-widget-content">
                                        <ul className="calendar-block-events">
                                          <li
                                            data-toggle="modal"
                                            data-target="#private-event"
                                          >
                                            <span className="event-status completed" />
                                            Send the new “Olympus” project files
                                            to the Agency
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr data-time="13:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="14:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>2PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="14:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="15:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>3PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="15:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="16:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>4PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="16:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="17:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>5PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="17:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="18:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>6PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="18:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="19:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>7PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="19:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="20:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>8PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="20:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="fc-content-skeleton">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td
                                        className="fc-axis"
                                        style={{ width: "1px" }}
                                      />
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container" />
                                          <div className="fc-event-container" />
                                          <div className="fc-highlight-container" />
                                          <div className="fc-bgevent-container" />
                                          <div className="fc-business-container" />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container" />
                                          <div className="fc-event-container" />
                                          <div className="fc-highlight-container" />
                                          <div className="fc-bgevent-container" />
                                          <div className="fc-business-container" />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container" />
                                          <div className="fc-event-container" />
                                          <div className="fc-highlight-container" />
                                          <div className="fc-bgevent-container" />
                                          <div className="fc-business-container" />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container" />
                                          <div className="fc-event-container" />
                                          <div className="fc-highlight-container" />
                                          <div className="fc-bgevent-container" />
                                          <div className="fc-business-container" />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container" />
                                          <div className="fc-event-container" />
                                          <div className="fc-highlight-container" />
                                          <div className="fc-bgevent-container" />
                                          <div className="fc-business-container" />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container" />
                                          <div className="fc-event-container" />
                                          <div className="fc-highlight-container" />
                                          <div className="fc-bgevent-container" />
                                          <div className="fc-business-container" />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container" />
                                          <div className="fc-event-container" />
                                          <div className="fc-highlight-container" />
                                          <div className="fc-bgevent-container" />
                                          <div className="fc-business-container" />
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr
                                className="fc-divider fc-widget-header"
                                style={{ display: "none" }}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">THURSDAY, MARCH 24</h6>
                </div>
                <div className="no-past-events">
                  <div className="control-block-button">
                    <a
                      href="#"
                      className="btn btn-control bg-breez"
                      data-toggle="modal"
                      data-target="#create-event"
                    >
                      <svg className="olymp-plus-icon">
                        <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-plus-icon" />
                      </svg>
                      <div className="ripple-container">
                        <div
                          className="ripple ripple-on ripple-out"
                          style={{
                            left: "36px",
                            top: "-41.2px",
                            backgroundColor: "rgb(255, 255, 255)",
                            transform: "scale(2.60417)",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <svg className="olymp-month-calendar-icon">
                    <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-month-calendar-icon" />
                  </svg>
                  <span>There are no events to show</span>
                  <a
                    href="#"
                    className="h6"
                    data-toggle="modal"
                    data-target="#create-event"
                  >
                    Create an Event
                  </a>
                </div>
              </div>
              <div className="tab-pane" id="day" role="tabpanel">
                <div
                  className="fc-view fc-agendaDay-view fc-agenda-view"
                  style={{}}
                >
                  <table>
                    <thead className="fc-head">
                      <tr>
                        <td className="fc-head-container fc-widget-header">
                          <div
                            className="fc-row fc-widget-header"
                            style={{ marginRight: "16px" }}
                          >
                            <table>
                              <thead>
                                <tr>
                                  <th
                                    className="fc-axis fc-widget-header"
                                    style={{ width: "1px" }}
                                  />
                                  <th
                                    className="fc-day-header fc-widget-header fc-mon"
                                    data-date="2017-04-10"
                                  >
                                    Monday
                                  </th>
                                </tr>
                              </thead>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody className="fc-body">
                      <tr>
                        <td className="fc-widget-content">
                          <div
                            className="fc-time-grid-container fc-scroller"
                            style={{ height: "400px" }}
                          >
                            <div className="fc-time-grid">
                              <div className="fc-bg">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td
                                        className="fc-axis fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td
                                        className="fc-day fc-widget-content fc-mon fc-today fc-state-highlight"
                                        data-date="2017-04-10"
                                      />
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="fc-slats">
                                <table>
                                  <tbody>
                                    <tr data-time="06:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>6AM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="06:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="07:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>7AM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="07:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="08:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>8AM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="08:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="09:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>9AM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="09:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="10:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>10AM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="10:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="11:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>11AM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="11:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr
                                      data-time="
                                                                      :00:00"
                                    >
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>12PM</span>
                                      </td>
                                      <td className="fc-widget-content">
                                        <ul className="calendar-block-events">
                                          <li
                                            data-toggle="modal"
                                            data-target="#public-event"
                                          >
                                            <span className="event-status b-day" />
                                            Chris Greyson’s Bday
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr data-time="12:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="13:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>1PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="13:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="14:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>2PM</span>
                                      </td>
                                      <td className="fc-widget-content">
                                        <ul className="calendar-block-events">
                                          <li
                                            data-toggle="modal"
                                            data-target="#public-event"
                                          >
                                            <span className="event-status completed" />
                                            Make Dinner Plans with Jennifer
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr data-time="14:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="15:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>3PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="15:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="16:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>4PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="16:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="17:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>5PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="17:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="18:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>6PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="18:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="19:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>7PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="19:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="20:00:00">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      >
                                        <span>8PM</span>
                                      </td>
                                      <td className="fc-widget-content" />
                                    </tr>
                                    <tr data-time="20:30:00" className="fc-minor">
                                      <td
                                        className="fc-axis fc-time fc-widget-content"
                                        style={{ width: "40px" }}
                                      />
                                      <td className="fc-widget-content" />
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="fc-content-skeleton">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td
                                        className="fc-axis"
                                        style={{ width: "40px" }}
                                      />
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container" />
                                          <div className="fc-event-container" />
                                          <div className="fc-highlight-container" />
                                          <div className="fc-bgevent-container" />
                                          <div className="fc-business-container" />
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr
                                className="fc-divider fc-widget-header"
                                style={{ display: "none" }}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">TUESDAY, MARCH 8</h6>
                </div>
                <div className="today-events calendar">
                  <div className="list">
                    <div className="control-block-button">
                      <a
                        href="#"
                        className="btn btn-control bg-breez"
                        data-toggle="modal"
                        data-target="#create-event"
                      >
                        <svg className="olymp-plus-icon">
                          <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-plus-icon" />
                        </svg>
                      </a>
                    </div>
                    <div
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                      className="day-event"
                    >
                      <div className="card checked">
                        <div className="card-header" role="tab" id="headingOne">
                          <div className="event-time">
                            <time dateTime="2004-07-24T18:18">9:00am</time>
                            <div className="more">
                              <svg className="olymp-three-dots-icon">
                                <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                              </svg>
                              <ul className="more-dropdown">
                                <li>
                                  <a href="#">Mark as Completed</a>
                                </li>
                                <li>
                                  <a href="#">Delete Event</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h5 className="mb-0 title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#"
                              aria-expanded="true"
                            >
                              Chris Greyson’s Bday
                              <span
                                className="event-status-icon checked"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-original-title="CHECKED"
                              >
                                <svg className="olymp-checked-calendar-icon">
                                  <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-checked-calendar-icon" />
                                </svg>
                              </span>
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" role="tab" id="headingThree">
                          <div className="event-time">
                            <time
                              className="published"
                              dateTime="2017-03-24T18:18"
                            >
                              1:30am
                            </time>
                            <div className="more">
                              <svg className="olymp-three-dots-icon">
                                <use xlinkHref="./assets/./assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                              </svg>
                              <ul className="more-dropdown">
                                <li>
                                  <a href="#">Mark as Completed</a>
                                </li>
                                <li>
                                  <a href="#">Delete Event</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h5 className="mb-0 title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                              onClick={handleClickOpen}
                            >
                              Make Dinner Plans with Jennifer
                              <svg className="olymp-dropdown-arrow-icon">
                                <use xlinkHref="./assets/./assets/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon" />
                              </svg>
                              <span
                                className="event-status-icon completed"
                                data-toggle="modal"
                                data-target="#public-event"
                              >
                                <svg
                                  className="olymp-checked-calendar-icon"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  data-original-title="UNCOMPLETED"
                                >
                                  <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-checked-calendar-icon" />
                                </svg>
                              </span>
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                        >
                          <div className="card-body">
                            I have to make reservations at that new restaurant
                            downtown.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Rdv</DialogTitle>
  
          <PopUp/>
        </Dialog>
      </div>
    )
}

export default Schedule
