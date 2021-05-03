import React from "react";

export default function Experience() {
  return (
    <div className="item mb-3">
      <div className="item-heading row align-items-center mb-2">
        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
          Senior Software Engineer
        </h4>
        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
          Google | 2019 - Present
        </div>
      </div>
      <div className="item-content">
        <p>
          Role description goes here ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor
          sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam felis.
        </p>
        <ul className="resume-list">
          <li>Lorem ipsum dolor sit amet, consectetuer.</li>
          <li>Aenean commodo ligula eget dolor.</li>
          <li>Etiam ultricies nisi vel augue.</li>
        </ul>
      </div>
    </div>
  );
}