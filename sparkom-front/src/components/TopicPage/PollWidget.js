import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../assets/img/avatar38-sm.jpg";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: "none",
    },
  }));
  const style = {
    width: 11,
    color: "#5e5e5e",
  };
function PollWidget() {
    return (
        <div>
            <div className="ui-block">
				<div className="ui-block-title">
					<h6 className="title">James's Poll</h6>
				</div>
				<div className="ui-block-content">

 			
					<ul className="widget w-pool">
						<li>
							<p>If you had to choose, which actor do you prefer to be the next Darkman? </p>
						</li>
						<li>
							<div className="skills-item">
								<div className="skills-item-info">
									<span className="skills-item-title">
										<span className="radio">
											<label>
												<input type="radio" name="optionsRadios" />
												Thomas Bale
											</label>
										</span>
									</span>
									<span className="skills-item-count">
										<span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="62" data-from="0"></span>
										<span className="units">62%</span>
									</span>
								</div>
                                <div className="skills-item-info">
									<span className="skills-item-title">
										<span className="radio">
											<label>
												<input type="radio" name="optionsRadios" />
												Thomas Bale
											</label>
										</span>
									</span>
									<span className="skills-item-count">
										<span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="62" data-from="0"></span>
										<span className="units">28%</span>
									</span>
								</div>
								
					
								<div className="counter-friends">12 friends voted for this</div>
					
								<ul className="friends-harmonic">
									<li>
										<a href="#">
											<img src={avatar} alt="friend" />
										</a>
									</li>
									<li>
										<a href="#">
											<img src={avatar} alt="friend" />
										</a>
									</li>
									<li>
										<a href="#">
											<img src={avatar} alt="friend" />
										</a>
									</li>
									<li>
										<a href="#">
											<img src={avatar} alt="friend" />
										</a>
									</li>
									<li>
										<a href="#">
											<img src={avatar} alt="friend" />
										</a>
									</li>
									<li>
										<a href="#">
											<img src={avatar} alt="friend" />
										</a>
									</li>
									
									<li>
										<a href="#" className="all-users">+3</a>
									</li>
								</ul>
							</div>
						</li>
					
						
					</ul>
					
					<a href="#" className="btn btn-md-2 btn-border-think custom-color c-grey full-width">Vote Now!</a>
				</div>
			</div>
        </div>
    )
}

export default PollWidget
