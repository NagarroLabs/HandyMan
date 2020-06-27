import React from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css';

const JobCard = ({
    id,
    name,
    description,
    estimatedBudget,
    specialization,
    type,
    deleteJob
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
            {type === 'display' ? (
                <div>
                    <button type="button" className="btn btn-primary m-2">
                        Details
                    </button>
                    <button type="button" className="btn btn-secondary m-2">
                        Contact
                    </button>
                </div>
            ) : (
                <div>
                    <Link
                        type="button"
                        to={'/jobs/myjobs/' + id}
                        className="btn btn-primary m-2"
                    >
                        Edit
                    </Link>
                    <button
                        type="button"
                        className="btn btn-secondary m-2"
                        onClick={deleteJob}
                        value={id}
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default JobCard;
