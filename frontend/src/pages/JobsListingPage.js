import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getJobs } from '../actions';

import { useHttpClient } from '../shared/hooks/http-hook';
import SearchBox from '../components/SearchBox';
import FilteringSection from '../components/FilteringSection';

function JobsListingPage(props) {
    const jobs = props.jobs;
    const [searchField, setSearchField] = useState('');
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
        props.getJobs(sendRequest);
    }, []);

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

const mapStateToProps = (state) => {
    return { jobs: state.jobs };
};

export default connect(mapStateToProps, { getJobs })(JobsListingPage);
