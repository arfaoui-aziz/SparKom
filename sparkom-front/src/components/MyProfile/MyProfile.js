import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../../store/slices/profile";
import NavBar from "../NavBar/NavBar";
import Header from "../ProfileSettings/Header";
import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function MyProfile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div className="container">
        <div className="row">
          <Header />
          <LeftSidebar />
          <Feed />
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
