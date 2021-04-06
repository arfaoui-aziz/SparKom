import React from "react";
import ProgressBar from "./ProgressBar";

//******************* */
export default function BadgeDescription({ name, img, description, progress }) {
  return (
    <div className="ui-block">
      <div className="birthday-item inline-items badges">
        <div className="author-thumb">
          <img src={img} alt="author" />
          {progress === 100 && (
            <div class="label-avatar" style={{ backgroundColor: "green" }}>
              &#10003;
            </div>
          )}
        </div>
        <div className="birthday-author-name">
          <a href="#" className="h6 author-name">
            {name}
          </a>
          <div className="birthday-date">{description}</div>
        </div>
        <div className="skills-item">
          <ProgressBar value={progress} />
        </div>
      </div>
    </div>
  );
}