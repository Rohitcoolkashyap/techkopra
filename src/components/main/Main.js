import React from "react";
import WindowCard from "../window/WindowCard";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";
export default function Main() {
  return (
    <div className="main">
      <div className="main__title">
        <h2 className="main__heading">Window type</h2>
        <div className="main__title__icons">
          <SearchIcon className="main_searchIcon" />
          <InfoIcon className="main_searchIcon" />
        </div>
      </div>

      <div className="main__windowCardRow">
        <WindowCard title="Single leaf windows." image="window.png" />
        <WindowCard title="Double leaf windows." image="window2.png" />

        <WindowCard title="Other leaf windows." image="window.png" />
      </div>
    </div>
  );
}
