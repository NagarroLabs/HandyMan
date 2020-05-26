import React, { useState, useEffect } from 'react';
import * as jobsApi from '../mock-api/jobsApi';

import SearchBox from '../components/SearchBox';

import FilteringSection from '../components/FilteringSection';

export default function JobsListingPage(props) {
  const [jobs, setJobs] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    if (jobs.length === 0)
      jobsApi.getJobs().then((jobsList) => {
        setJobs(jobsList);
      });
  }, [jobs.length]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  if (jobs.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className='tc'>
        <div className='w-100 pa2'>
          <h1 className='f1'>Jobs Page</h1>
          <SearchBox searchChange={onSearchChange} />
        </div>
        <div className='mw9 center ph3-ns pa5'>
          <div className='cf ph2'>
            <div className='fl w-100'>
              <FilteringSection props={{ jobs, searchField }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
