import React from "react";
import * as jobsApi from "./mock-api/jobsApi";
import ErrorBoundry from "./components/ErrorBoundry";
import SearchBox from "./components/SearchBox";
import JobsList from "./components/JobsList";
import FilterBox from "./components/FilterBox";

class JobListingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      searchField: "",
    };
  }

  componentDidMount() {
    jobsApi.getJobs().then((jobsList) => {
      this.setState({ jobs: jobsList });
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredJobs = this.state.jobs.filter((job) => {
      return job.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.jobs.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <div className="w-100 pa2">
            <h1 className="f1">Jobs Page</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <div className="mw9 center ph3-ns pa5">
            <div className="cf ph2">
              <div className="fl w-100 w-50-m w-25-l">
                <FilterBox />
              </div>
              <div className="fl w-100 w-50-m w-75-l">
                <ErrorBoundry>
                  <JobsList jobs={filteredJobs} />
                </ErrorBoundry>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default JobListingPage;
