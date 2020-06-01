import React, { useState } from 'react';

export default function FilterForm({ props }) {
  const [filters, setFilters] = useState({
    priceTo: 0,
    specialization: '',
    order: '',
  });
  const sortOrder = ['ascending', 'descending'];
  const specializations = ['Finance', 'Account Executive', 'Technology'];

  const updateFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const sendFilters = (e) => {
    e.preventDefault();
    props.applyFilter({ filters });
  };
  return (
    <form className="text-center m-1 flex-wrap" onSubmit={sendFilters}>
      <h4 className="font-weight-bold">Refine your results</h4>
      <br />
      <div className="form-group">
        <div className="">
          <label className="" htmlFor="price-from">
            Price up to
          </label>
        </div>
        <input
          className="form-control"
          min="0"
          max="10000000"
          type="number"
          id="price-from"
          name="priceTo"
          placeholder="1000"
          value={filters.priceTo}
          onChange={updateFilters}
        />
      </div>
      <div className="form-group">
        <div className="">
          <label className="form-label" htmlFor="specialization">
            Specialization
          </label>
        </div>
        <select
          className="form-control"
          id="specialization"
          value={filters.specialization}
          name="specialization"
          onChange={updateFilters}
        >
          <option value="">Choose...</option>
          {specializations.map((pc) => (
            <option key={pc} value={pc.toLowerCase()}>
              {pc}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <div className="">
          <label className="form-label" htmlFor="sortorder">
            Sort Order
          </label>
        </div>
        <select
          className="form-control"
          id="sortorder"
          name="order"
          onChange={updateFilters}
        >
          <option value="">Choose...</option>
          {sortOrder.map((order) => (
            <option key={order} value={order.replace(' ', '').toLowerCase()}>
              {order}
            </option>
          ))}
        </select>
      </div>
      <br />
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}
