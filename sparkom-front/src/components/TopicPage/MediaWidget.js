import React from "react";
import img from "../../assets/img/last-photo10-large.jpg";
export default function MediaWidget() {
  return (
	<div className="ui-block">
		<div className="ui-block-title">
			<h6 className="title">Last Photos</h6>
		</div>
		<div className="ui-block-content">

      <ul className="widget w-last-photo js-zoom-gallery">
        <li>
          <a href="img/last-phot18-large.jpg">
            <img src={img} alt="photo" />
          </a>
        </li>
        <li>
          <a href="img/last-phot18-large.jpg">
            <img src={img} alt="photo" />
          </a>
        </li>
        <li>
          <a href="img/last-phot18-large.jpg">
            <img src={img} alt="photo" />
          </a>
        </li>
		<li>
          <a href="img/last-phot18-large.jpg">
            <img src={img} alt="photo" />
          </a>
        </li>
        <li>
          <a href="img/last-phot18-large.jpg">
            <img src={img} alt="photo" />
          </a>
        </li>
        <li>
          <a href="img/last-phot18-large.jpg">
            <img src={img} alt="photo" />
          </a>
        </li>
		<li>
          <a href="img/last-phot18-large.jpg">
            <img src={img} alt="photo" />
          </a>
        </li>
        <li>
          <a href="img/last-phot18-large.jpg">
            <img src={img} alt="photo" />
          </a>
        </li>
        <li>
          <a href="img/last-phot18-large.jpg">
            <img src={img} alt="photo" />
          </a>
        </li>
        
      </ul>
    </div>
	</div>

  );
}
