import React from "react";

export default function Projects() {
  return (
    <div className="item mb-3">
      <div className="item-heading row align-items-center mb-2">
        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
          Project Lorem Ipsum
        </h4>
        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
          2019
        </div>
      </div>
      <div className="item-content">
        <p>
          You can use this section for your side projects. You can{" "}
          <a href="#" className="theme-link">
            provide a project link here
          </a>{" "}
          as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
    </div>
  );
}
