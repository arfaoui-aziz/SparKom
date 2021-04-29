import React from "react";
import Header from "../ProfileSettings/Header";
import BadgeDescription from "./BadgeDescription";
import SearchCard from "./SearchCard";
import badgeimg from "../../assets/img/badge1.png";
import badgeimg2 from "../../assets/img/badge2.png";
import badgeimg3 from "../../assets/img/badge3.png";
import NavBar from "../NavBar/NavBar";

export default function AllBadges() {
  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div className="container">
        <div className="row">
          <Header />
          <SearchCard title="In Progress (20)" placeholder="Search Badges..." />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <BadgeDescription
              img={badgeimg}
              title="Sparkom User"
              description="Congratulations! You have been in the SparKom community for 2 years."
              progress={70}
            />
            <BadgeDescription
              img={badgeimg}
              title="Sparkom User"
              description="Congratulations! You have been in the SparKom community for 2 years."
              progress={30}
            />
            <BadgeDescription
              img={badgeimg}
              title="Sparkom User"
              description="Congratulations! You have been in the SparKom community for 2 years."
              progress={60}
            />
            <BadgeDescription
              img={badgeimg2}
              title="Sparkom User"
              description="Congratulations! You have been in the SparKom community for 2 years."
              progress={100}
            />
            <BadgeDescription
              img={badgeimg3}
              title="Sparkom User"
              description="Congratulations! You have been in the SparKom community for 2 years."
              progress={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
