import React from "react";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <SearchIcon className="search__icon" />

      <input type="text" placeholder="Search" name="" />
    </div>
  );
}
