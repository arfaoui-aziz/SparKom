import React from "react";

function PopUp() {
  return (
    <div>
      <div className="modal-dialog window-popup create-event" role="document">
        <div className="modal-content">
          <a
            href="#top"
            className="close icon-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <svg className="olymp-close-icon">
              <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-close-icon" />
            </svg>
          </a>
          <div className="modal-header">
            <h6 className="title">RDV Form</h6>
          </div>
          <div className="modal-body">
            <div className="form-group label-floating">
              <label className="control-label">Applicant Name</label>
              <input
                className="form-control"
                placeholder
                defaultValue="Choose Applicant"
                type="text"
              />
            </div>

            <div className="form-group date-time-picker label-floating">
              <label className="control-label">RDV Date</label>
              <input name="datetimepicker" defaultValue="26/03/2016" />
              <span className="input-group-addon">
                <svg className="olymp-calendar-icon icon">
                  <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                </svg>
              </span>
            </div>

            <div className="form-group label-floating">
              <label className="control-label">Start Time</label>
              <input
                className="form-control"
                placeholder
                defaultValue="09:00"
                type="text"
              />
            </div>
            <div className="form-group label-floating">
              <label className="control-label">Note</label>
              <textarea
                className="form-control"
                placeholder
                defaultValue={
                  "I need to take Querty for a check up and ask the doctor if he needs a new tank.\n\t\t\t\t\t"
                }
              />
            </div>
            <form className="form-group label-floating is-select">
              <svg className="olymp-happy-face-icon">
                <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
              </svg>
              <select
                className="selectpicker form-control style-2 show-tick"
                multiple
                data-live-search="true"
              >
                <option
                  title="Green Goo Rock"
                  data-content='<div class="inline-items">
										<div class="author-thumb">
											<img src="./assets/img/avatar52-sm.jpg" alt="author">
										</div>
											<div class="h6 author-title">Green Goo Rock</div>

										</div>'
                >
                  Green Goo Rock
                </option>
                <option
                  title="Mathilda Brinker"
                  data-content='<div class="inline-items">
											<div class="author-thumb">
												<img src="./assets/img/avatar74-sm.jpg" alt="author">
											</div>
											<div class="h6 author-title">Mathilda Brinker</div>
										</div>'
                >
                  Mathilda Brinker
                </option>
                <option
                  title="Marina Valentine"
                  data-content='<div class="inline-items">
											<div class="author-thumb">
												<img src="./assets/img/avatar48-sm.jpg" alt="author">
											</div>
											<div class="h6 author-title">Marina Valentine</div>
										</div>'
                >
                  Marina Valentine
                </option>
                <option
                  title="Dave Marinara"
                  data-content='<div class="inline-items">
											<div class="author-thumb">
												<img src="./assets/img/avatar75-sm.jpg" alt="author">
											</div>
											<div class="h6 author-title">Dave Marinara</div>
										</div>'
                >
                  Dave Marinara
                </option>
                <option
                  title="Rachel Howlett"
                  data-content='<div class="inline-items">
											<div class="author-thumb">
												<img src="./assets/img/avatar76-sm.jpg" alt="author">
											</div>
											<div class="h6 author-title">Rachel Howlett</div>
										</div>'
                >
                  Rachel Howlett
                </option>
              </select>
            </form>
            <button className="btn btn-breez btn-lg full-width">
              Save RDV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
