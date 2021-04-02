import React from "react";
import Header from "../ProfileSettings/Header";
import FriendCard from "./FriendCard";
import SearchCard from "./SearchCard";

export default function AllFriends() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Header />
          <SearchCard
            title="All Friends (86)"
            placeholder="Search Friends..."
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
        </div>
      </div>
    </>
  );
}
