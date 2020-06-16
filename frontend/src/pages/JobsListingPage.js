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
      <div className="mx-auto">
        <h1 className="text-center m-3">Jobs Page</h1>
        <SearchBox className="" searchChange={onSearchChange} />
        <div className="d-block">
          <FilteringSection props={{ jobs, searchField }} />
        </div>
      </div>
    );
  }
}
