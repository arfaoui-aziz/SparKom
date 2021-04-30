import React from "react";
import Header from "../Group/Header";
import HeaderG from "../Group/HeaderG";
import Feed from "../Group/Feed";
import LeftSidebar from "../Group/LeftSidebar";
import RightSidebar from "../Group/RightSidebar";
import NavBar from "../../components/NavBar/NavBar";
import { useServerApi } from "../../hooks/useServerApi";
import { useParams } from "react-router-dom";
export default function MyProfile() {
  const { id } = useParams();
  const [dm, err, reload] = useServerApi("group/getdev/" + id);
  const toRender = dm;
  return (
    <div class="container">
      <div class="row">
      <NavBar />
      <div class="header-spacer header-spacer-small mb-3"></div> 
      {toRender ? (
          <>
        <HeaderG  dm={toRender} />
        <LeftSidebar  dm={toRender} />
        <Feed dm={toRender}  />
        <RightSidebar dm={toRender} />
        </>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
}
