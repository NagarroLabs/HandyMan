import React from 'react';

function SearchBox({ searchChange }) {
  return (
    <form className="form-inline d-flex justify-content-center md-form form-sm mt-0 m-3">
      <i className="fas fa-search" area-hidden="true"></i>
      <input
        className="form-control w-auto"
        type="text"
        name="name"
        id="name"
        placeholder="Search jobs"
        onChange={searchChange}
      />
    </form>
  );
}

export default SearchBox;
