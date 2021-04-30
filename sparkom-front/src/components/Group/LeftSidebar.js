import React from "react";
import AdminMembers from "./AdminMembers";
import MyBio from "./MyBio";
import { useServerApi } from "../../hooks/useServerApi";
import { useParams } from "react-router-dom";
export default function LeftSidebar(props) {
  const { id } = useParams();
  const [dm, err, reload] = useServerApi("group/getdev/" + id);
  const toRender = dm;
  return (
    <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-12 ">
     {toRender ? (
          <>
      <MyBio dm={toRender}/>
      <AdminMembers />
      </>
        ) : (
          <p>Product not found</p>
        )}
         
    </div>
  );
}
