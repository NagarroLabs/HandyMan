import React, { useState, useEffect } from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import JobsList from '../components/JobsList';
import SearchForm from './SearchForm';

export default function FilteringSection({ props }) {
  const [jobs, setJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchField, setField] = useState('');

  useEffect(() => {
    setJobs(props.jobs);
    setFilteredJobs(props.jobs);
    setDisplayedJobs(props.jobs);
  }, [props.jobs]);

  useEffect(() => {
    setField(props.searchField);
  }, [props.searchField]);

  useEffect(() => {
    let searchedJobs =
      searchField === ''
        ? filteredJobs
        : filteredJobs.filter((job) => {
            return job.name.toLowerCase().includes(searchField.toLowerCase());
          });
    setDisplayedJobs(searchedJobs);
  }, [searchField, filteredJobs]);

  const applyFilter = ({ filters }) => {
    let searchedJobs = jobs.filter((job) => {
      if (
        filters.priceTo !== 0 &&
        filters.priceTo.length !== 0 &&
        parseFloat(job.estimatedBudget) > filters.priceTo
      ) {
        return false;
      }
      if (
        filters.specialization.length !== 0 &&
        filters.specialization.localeCompare(job.category.toLowerCase()) !== 0
      ) {
        return false;
      }
      return true;
    });
    if (filters.order === 'ascending') {
      searchedJobs = searchedJobs.sort(
        (a, b) => a.estimatedBudget - b.estimatedBudget
      );
    }
    if (filters.order === 'descending') {
      searchedJobs = searchedJobs.sort(
        (b, a) => a.estimatedBudget - b.estimatedBudget
      );
    }
    setFilteredJobs(searchedJobs);
  };

  return (
    <div className=''>
      <div className='fl w-100 w-50-m w-25-l'>
        <SearchForm props={{ applyFilter }} />
      </div>
      <div className='fl w-100 w-50-m w-75-l'>
        <ErrorBoundry>
          <JobsList props={{ displayedJobs }} />
        </ErrorBoundry>
      </div>
    </div>
  );
}
