import React from 'react';
import './JobCard.css';

const JobCard = ({
    id,
    name,
    description,
    estimatedBudget,
    specialization
}) => {
    return (
        <div className="card text-center m-2">
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-subtitle">{description}</p>
                <p className="">
                    Estimated budget:{' '}
                    <span className="b">{estimatedBudget}</span>
                </p>
                <h5 className="">
                    Specialization: <span className="b">{specialization}</span>
                </h5>
            </div>
            <div className="">
                <button type="button" className="btn btn-primary m-2">
                    Details
                </button>
                <button type="button" className="btn btn-secondary m-2">
                    Contact
                </button>
            </div>
        </div>
    );
};

export default JobCard;
