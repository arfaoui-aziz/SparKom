import React from "react";

import "../../assets/css/Sidebar.css";
import "../../assets/css/Widgets.css";
import "../../assets/css/main.css";
import pdf from "../../assets/img/avatar49-sm.jpg";
import pdf1 from "../../assets/img/avatar9-sm.jpg";
export default function Events() {
return (
    <div>
      
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="ui-block">
              <div className="ui-block-title">
                <div className="h6 title">GroupName’s Events</div>
                <div style={{float: 'right'}}>
                  <a
                    href="."
                    data-toggle="modal"
                    data-target="#create-photo-album"
                    className="btn btn-primary btn-md-2"
                  >
                    Create Event +
                  </a>

                  
                </div>
                <a href="." className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg></a>
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
                        <svg className="olymp-small-calendar-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-calendar-icon" /></svg>
                        <span className="day">01</span>
                        <span className="month">June</span>
                      </div>
                    </td>
                    <td className="author">
                      <div className="event-author inline-items">
                        <div className="author-thumb">
                        <img src={pdf1} alt="author" />
                        </div>
                        <div className="author-date">
                          <a href="." className="author-name h6">Green Goo in Gotham</a>
                          <time className="published" dateTime="2017-03-24T18:18">Saturday at 9:00pm</time>
                        </div>
                      </div>
                    </td>
                    <td className="location">
                      <div className="place inline-items">
                        <svg className="olymp-add-a-place-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-a-place-icon" /></svg>
                        <span>Gotham Bar</span>
                      </div>
                    </td>
                    <td className="description">
                      <p className="description">We’ll be playing in the Gotham Bar in May. Come and have a great time with us! Entry: $12</p>
                    </td>
                    <td className="users">
                      <ul className="friends-harmonic">
                        <li>
                          <a href=".">
                          <img src={pdf1} alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href=".">
                          <img src={pdf}alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href=".">
                          <img src={pdf1} alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href=".">
                          <img src={pdf} alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href=".">
                          <img src={pdf1} alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="." className="all-users bg-breez">+24</a>
                        </li>
                        <li className="with-text">
                          Will Assist
                        </li>
                      </ul>
                    </td>
                    <td className="add-event">
                      <a href="20-CalendarAndEvents-MonthlyCalendar.html" className="btn btn-breez btn-sm">Add to Calendar</a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="event-item">
                    <td className="upcoming">
                      <div className="date-event">
                        <svg className="olymp-small-calendar-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-calendar-icon" /></svg>
                        <span className="day">28</span>
                        <span className="month">may</span>
                      </div>
                    </td>
                    <td className="author">
                      <div className="event-author inline-items">
                        <div className="author-thumb">
                        <img src={pdf} alt="author" />
                        </div>
                        <div className="author-date">
                          <a href="." className="author-name h6">lorem</a>
                          <time className="published" dateTime="2017-03-24T18:18">Saturday at 9:00pm</time>
                        </div>
                      </div>
                    </td>
                    <td className="location">
                      <div className="place inline-items">
                        <svg className="olymp-add-a-place-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-a-place-icon" /></svg>
                        <span>Gotham Bar</span>
                      </div>
                    </td>
                    <td className="description">
                      <p className="description">We’ll be playing in the Gotham Bar in May. Come and have a great time with us! Entry: $50</p>
                    </td>
                    <td className="users">
                      <ul className="friends-harmonic">
                        <li>
                          <a href=".">
                          <img src={pdf1} alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href=".">
                          <img src={pdf}alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href=".">
                          <img src={pdf1} alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href=".">
                          <img src={pdf} alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href=".">
                          <img src={pdf1} alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="." className="all-users bg-breez">+24</a>
                        </li>
                        <li className="with-text">
                          Will Assist
                        </li>
                      </ul>
                    </td>
                    <td className="add-event">
                      <a href="20-CalendarAndEvents-MonthlyCalendar.html" className="btn btn-breez btn-sm">Add to Calendar</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">PAST EVENTS</h6>
              </div>
              <div className="no-past-events">
                <svg className="olymp-month-calendar-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-month-calendar-icon" /></svg>
                <span>There are no past events <br />to show</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="back-to-top" href=".">
        <img src="svg-icons/back-to-top.svg" alt="arrow" className="back-icon" />
      </a>
    </div>
  );
}