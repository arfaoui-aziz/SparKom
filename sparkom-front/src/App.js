import React from "react";

import "./App.css";
import Feed from "./components/Profile/Feed";
import Header from "./components/Profile/Header";
import Sidebar from "./components/Profile/Sidebar";
import Widgets from "./components/Profile/Widgets";

function App() {
  return (
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
  );
}

export default App;
