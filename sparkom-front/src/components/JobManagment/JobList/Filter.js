import React from "react";

import "../../../assets/css/Jobs.css";

function Filter() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="ui-block responsive-flex1200">
            <div className="ui-block-title">
              <ul className="cat-list-bg-style align-center sorting-menu">
                <li className="cat-list__item active" data-filter="*">
                  <a href="#top" className>
                    Newest
                  </a>
                </li>
                <li className="cat-list__item" data-filter=".community">
                  <a href="#top" className>
                    Fits You
                  </a>
                </li>
                <li className="cat-list__item" data-filter=".news">
                  <a href="#top" className>
                    Daliiiii
                  </a>
                </li>
                <li className="cat-list__item" data-filter=".inspiration">
                  <a href="#top" className>
                    Dalliiii
                  </a>
                </li>
              </ul>

              <form className="w-search">
                <div className="form-group with-button">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search For a Job ..."
                  />
                  <button>
                    <svg className="olymp-magnifying-glass-icon">
                      <use xlinkHref="../../../assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
