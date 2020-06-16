import React, { useState, useEffect } from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import JobsList from '../components/JobsList';
import FilterForm from './FilterForm';

export default function FilteringSection({ props }) {
    const [jobs, setJobs] = useState([]);
    const [displayedJobs, setDisplayedJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchField, setField] = useState('');

    useEffect(() => {
        console.log(props.jobs);
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
                      return job.name
                          .toLowerCase()
                          .includes(searchField.toLowerCase());
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
                filters.specialization.localeCompare(
                    job.category.toLowerCase()
                ) !== 0
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
        <div className="container-fluid justify-content-center">
            <div className="row">
                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                    <FilterForm props={{ applyFilter }} />
                </div>
                <div className="col-xl-10 col-lg-8 col-md-8 col-sm-6 ">
                    <ErrorBoundry>
                        <JobsList props={{ displayedJobs }} />
                    </ErrorBoundry>
                </div>
            </div>
        </div>
    );
}
