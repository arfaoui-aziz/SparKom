import React from "react";
import Header from "./Header";
import TopicSearchBar from "./TopicSearchBar.js";
import TopicList from "./TopicList";


export default function AllTopics() {
  return (
    <div >
      <Header />
      <TopicSearchBar />
      <TopicList />
    </div>
  );
}
