import React from "react";

export default function Education({ degree, place, startDate, endDate }) {
  return (
    <li className="mb-3">
      <div className="resume-degree font-weight-bold">{degree}</div>
      <div className="resume-degree-org text-muted">{place}</div>
      <div className="resume-degree-time text-muted">
        {startDate} - {endDate}{" "}
      </div>
    </li>
  );
}
