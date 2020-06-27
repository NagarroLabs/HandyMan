import React, { useState, useEffect } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default function AddJobForm(props) {
    const specializations = ['Finance', 'Account Executive', 'Technology'];
    const [skill, setSkill] = useState('');
    const [skillList, setSkillList] = useState([]);
    const [showSkills, setShowSkills] = useState(false);
    const sendForm = (event) => {
        event.preventDefault();
    };

    const handleSkill = () => {
        setSkillList([...skillList, skill]);
        props.onChange({ target: { name: 'jobReqSkills', value: skill } });
        setSkill('');
    };

    function updateSkill({ target }) {
        setSkill(target.value);
    }

    function displaySkills() {
        setShowSkills(!showSkills);
    }

    useEffect(() => {
        setSkillList(props.job.jobReqSkills);
    }, [props.job]);

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
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
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
                        className="text-center form-control"
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
                    <input
                        className="form-control"
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

                    <input
                        className="form-control"
                        type="date"
                        name="jobCompletionTimeFrame"
                        onChange={props.onChange}
                        value={props.job.jobCompletionTimeFrame}
                    />
                </div>
                {/* Required Skills */}
                <div>
                    <label className="m-2 font-weight-bold">
                        Required skills for the job
                    </label>
                    <input
                        className="m-2 form-control"
                        id="jobReqSkills"
                        type="text"
                        name="jobReqSkills"
                        value={skill}
                        onChange={updateSkill}
                    />
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
                            className="m-2 form-control"
                            name="jobCountry"
                            country="Romania"
                            value={props.job.jobCountry}
                            onChange={props.onChange}
                            disabled
                        />
                        <RegionDropdown
                            className="m-2 form-control"
                            name="jobRegion"
                            country={props.job.jobCountry}
                            value={props.job.jobRegion}
                            onChange={props.onChange}
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
                        className="form-control"
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
                    {props.type === 'edit' ? (
                        <span>Edit job</span>
                    ) : (
                        <span>Submit job</span>
                    )}
                </button>
            </form>
        </div>
    );
}
