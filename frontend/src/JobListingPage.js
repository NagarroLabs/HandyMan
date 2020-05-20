import React from "react";
import * as jobsApi from "./mock-api/jobsApi";
import ErrorBoundry from "./components/ErrorBoundry";
import SearchBox from "./components/SearchBox";
import JobsList from "./components/JobsList";
import FilterBox from "./components/FilterBox";

class JobListingPage extends React.Component {
  state = {
    jobs: [],
    filteredJobs: [],
    showJobs: [],
    searchField: "",
  };
  constructor() {
    super();
    this.filterJobs = this.filterJobs.bind(this);
  }

  componentDidMount() {
    jobsApi.getJobs().then((jobsList) => {
      this.setState({
        jobs: jobsList,
        filteredJobs: jobsList,
        showJobs: jobsList,
      });
    });
  }

  filterJobs(priceTo, specialization, sortOrder) {
    let result = this.state.jobs;
    if (priceTo) {
      result = result.filter((job) => {
        return job.estimatedBudget < priceTo;
      });
    }
    if (priceTo === 0) {
      this.setState({
        showJobs: this.state.jobs,
        filteredJobs: this.state.jobs,
      });
      return;
    }
    if (sortOrder) {
      if (sortOrder === "ascendingprice") {
        result = result.sort((a, b) => a.estimatedBudget - b.estimatedBudget);
      } else {
        result = result.sort((a, b) => b.estimatedBudget - a.estimatedBudget);
      }
    }
    if (result.length !== this.state.jobs.length) {
      this.setState({
        filteredJobs: result,
        showJobs: result,
        searchField: "",
      });
    } else {
      result = this.state.jobs;
      this.setState({
        showJobs: result,
      });
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });

    var result = this.state.filteredJobs.filter((job) => {
      return job.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    console.log(result);
    this.setState({ showJobs: result });
  };

  render() {
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
                <FilterBox filter={this.filterJobs} />
              </div>
              <div className="fl w-100 w-50-m w-75-l">
                <ErrorBoundry>
                  <JobsList jobs={this.state.showJobs} />
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
