import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default function AddJobForm(props) {
    const specializations = ['Finance', 'Account Executive', 'Technology'];
    const [country, setCountry] = useState('Romania');
    const [region, setRegion] = useState('Timis');
    const [skill, setSkill] = useState('');
    const [skillList, setSkillList] = useState([]);
    const [showSkills, setShowSkills] = useState(false);
    const sendForm = (event) => {
        event.preventDefault();
        props.sendData({
            country,
            region,
            skillList,
        });
        props.onSubmit(event);
    };

    const handleSkill = () => {
        setSkillList([...skillList, skill]);
        setSkill('');
    };

    function updateSkill({ target }) {
        setSkill(target.value);
    }

    function displaySkills() {
        setShowSkills(!showSkills);
    }

    return (
        <div className="row justify-content-md-center">
            <form
                className="text-center m-2 col-xs-4 col-md-4"
                onSubmit={sendForm}
            >
                {/* Name */}
                <div>
                    <label className="m-3 font-weight-bold">
                        Name of the job
                    </label>
                    <br />
                    <input
                        id="jobName"
                        className=""
                        type="text"
                        size="50"
                        name="jobName"
                        placeholder="Name"
                        value={props.job.jobName}
                        onChange={props.onChange}
                    />
                </div>
                {/* Description */}
                <div>
                    <label className="m-3 font-weight-bold">
                        Job Description
                    </label>
                    <br />
                    <textarea
                        id="jobDescription"
                        name="jobDescription"
                        placeholder="Description"
                        cols="50"
                        rows="4"
                        value={props.job.jobDescription}
                        onChange={props.onChange}
                    />
                </div>
                {/* Category */}
                <div>
                    <label className="m-3 font-weight-bold">
                        Category for the job
                    </label>
                    <select
                        id="jobCategory"
                        value={props.job.jobCategory}
                        name="jobCategory"
                        onChange={props.onChange}
                    >
                        <option value="">Choose...</option>
                        {specializations.map((cat) => (
                            <option key={cat} value={cat.toLowerCase()}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Budget */}
                <div>
                    <label className="m-3 font-weight-bold">Job Budget</label>
                    <input
                        className="text-center"
                        min="0"
                        max="10000000"
                        type="number"
                        name="jobBudget"
                        placeholder="1000"
                        value={props.job.jobBudget}
                        onChange={props.onChange}
                    />
                </div>
                {/* Starting date */}
                <div>
                    <label className="m-2 font-weight-bold">
                        Starting date of the job
                    </label>
                    <Form.Control
                        style={{ width: '240px' }}
                        type="date"
                        name="jobStartDate"
                        onChange={props.onChange}
                        value={props.job.jobStartDate}
                    />
                </div>
                {/* Completion time frame */}
                <div>
                    <label className="m-2 font-weight-bold">
                        Ending date of the job
                    </label>
                    <Form.Control
                        style={{ width: '240px' }}
                        type="date"
                        name="jobCompletionFrame"
                        onChange={props.onChange}
                        value={props.job.jobCompletionFrame}
                    />
                </div>
                {/* Required Skills */}
                <div>
                    <label className="m-2 font-weight-bold">
                        Required skills for the job
                    </label>
                    <input
                        className="m-2"
                        id="jobReqSkills"
                        type="text"
                        name="jobReqSkills"
                        value={skill}
                        onChange={updateSkill}
                    />
                    <br />
                    <button
                        type="button"
                        className="m-2 btn btn-outline-success"
                        onClick={handleSkill}
                    >
                        Add skill
                    </button>
                    <button
                        type="button"
                        className="m-2 btn btn-outline-info"
                        onClick={displaySkills}
                    >
                        Show added skills
                    </button>
                    {showSkills ? (
                        <div>
                            {skillList.map((skill) => (
                                <span key={skill}>{skill}, </span>
                            ))}
                        </div>
                    ) : null}
                </div>
                {/* Country and Region */}
                <div>
                    <label className="m-2 font-weight-bold">
                        Choose the location for the job
                    </label>
                    <div>
                        <CountryDropdown
                            className="m-2"
                            value={'Romania'}
                            onChange={setCountry}
                            disabled
                        />
                        <RegionDropdown
                            className="m-2"
                            country={country}
                            value={'Timis'}
                            onChange={setRegion}
                            disabled
                        />
                    </div>
                </div>
                {/* Address */}
                <div>
                    <label className="m-2 font-weight-bold">
                        Write the address for the job in Timisoara
                    </label>
                    <br />
                    <input
                        id="jobAddress"
                        size="50"
                        type="text"
                        name="jobAddress"
                        placeholder="Address"
                        value={props.job.jobAddress}
                        onChange={props.onChange}
                    />
                </div>
                {/* Submit */}
                <button className="m-3 btn btn-primary" type="submit">
                    Submit job
                </button>
            </form>
        </div>
    );
}
