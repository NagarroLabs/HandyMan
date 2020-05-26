import React, { useState } from 'react';

export default function SearchForm({ props }) {
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
    <form className='' onSubmit={sendFilters}>
      <p className='mb-1'>Refine your results</p>
      <div className='columns text-center'>
        <div className='column col-4 col-xs-12'>
          <div className='form-group'>
            <div className='col-3 col-sm-12'>
              <label className='form-label' htmlFor='price-from'>
                Price up to
              </label>
            </div>
            <div className='col-9 col-sm-12'>
              <input
                className='form-input'
                min='0'
                max='10000000'
                type='number'
                id='price-from'
                name='priceTo'
                placeholder='£1,000,000'
                value={filters.priceTo}
                onChange={updateFilters}
              />
            </div>
          </div>
        </div>
        <div className='column col-4 col-xs-12'>
          <div className='form-group'>
            <div className='col-3 col-sm-12'>
              <label className='form-label' htmlFor='specialization'>
                Specialization
              </label>
            </div>
            <div className='col-9 col-sm-12'>
              <select
                className='form-select'
                id='specialization'
                value={filters.specialization}
                name='specialization'
                onChange={updateFilters}
              >
                <option value=''>Choose...</option>
                {specializations.map((pc) => (
                  <option key={pc} value={pc.toLowerCase()}>
                    {pc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='column col-4 col-xs-12'>
          <div className='form-group'>
            <div className='col-3 col-sm-12'>
              <label className='form-label' htmlFor='sortorder'>
                Sort Order
              </label>
            </div>
            <div className='col-9 col-sm-12'>
              <select
                className='form-select'
                id='sortorder'
                name='order'
                onChange={updateFilters}
              >
                <option value=''>Choose...</option>
                {sortOrder.map((order) => (
                  <option
                    key={order}
                    value={order.replace(' ', '').toLowerCase()}
                  >
                    {order}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}
