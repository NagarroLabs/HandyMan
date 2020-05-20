import React from "react";

function SearchBox({ searchChange }) {
  return (
    <input
      className="f6 f5-l input-reset bn black-80 bg-white pa3 lh-solid br2-ns br--left-ns"
      placeholder="search jobs"
      type="search"
      name="name"
      id="name"
      onChange={searchChange}
    ></input>
  );
}

export default SearchBox;
