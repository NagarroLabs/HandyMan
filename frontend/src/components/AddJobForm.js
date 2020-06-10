import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
export default function AddJobForm(props) {
  const specializations = ['Finance', 'Account Executive', 'Technology'];
  const [country, setCountry] = useState('Romania');
  const [region, setRegion] = useState();
  const [jobStartDate, setStartDate] = useState('');
  const [jobCompletionTimeFrame, setTimeFrame] = useState('');
  const [skill, setSkill] = useState('');
  const sendForm = (e) => {};

  const handleSkill = (e) => {
    if (e.key === 'Enter') {
      console.log('Pressed');
    }
  };

  return (
    <div className="row justify-content-md-center">
      <form className="text-center m-2 col-xs-4 col-md-4" onSubmit={sendForm}>
        <div>
          <label className="m-2 font-weight-bold" htmlFor="jobName">
            Name of the job
          </label>
          <br />
          <input
            id="jobName"
            className=""
            type="text"
            name="jobName"
            placeholder="Name"
            value={props.job.jobName}
            onChange={props.onChange}
          />
        </div>

        <div className="form-group">
          <label className="m-2 font-weight-bold" htmlFor="jobDescription">
            Enter a description for the job
          </label>
          <br />
          <textarea
            id="jobDescription"
            name="jobDescription"
            placeHolder="Description"
            cols="50"
            rows="4"
            value={props.job.jobDescription}
            onChange={props.onChange}
          />
        </div>
        <div>
          <DateTimePicker
            disableClock={true}
            onChange={setStartDate}
            value={jobStartDate}
          />
        </div>
        <div>
          Enter the required skills for this job
          <input
            className="form-control"
            type="text"
            onKeyDown={handleSkill}
            value={skill}
            onChange={props.onChange}
          />
        </div>
        <div>
          <CountryDropdown value={country} onChange={setCountry} />
          <RegionDropdown
            country={country}
            value={region}
            onChange={setRegion}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit job
        </button>
      </form>
    </div>
  );
}
