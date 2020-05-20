import React from "react";

const FilterBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa1">
      <form className="pa3 ba b--black-10">
        <fieldset className="cf bn ma0 pa0">
          <legend className="pa0 f5 mb3 black-80">Filters</legend>
          <div className="cf">
            <input
              className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 br2-ns br--right-ns"
              type="submit"
              value="Filter"
            ></input>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FilterBox;
