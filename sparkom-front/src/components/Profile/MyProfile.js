import React from "react";
import Widgets from "./Widgets";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MyProfile() {
  return (
    <div>
      <div className="app">
        {/* Header */}
        <Header />
        {/* App Body */}
        <div className="app__body">
          <Sidebar />

          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />
        </div>
      </div>
    </div>
  );
}
