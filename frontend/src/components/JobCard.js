import React from "react";
import { Button } from "react-bootstrap";

const JobCard = ({
  id,
  name,
  description,
  estimatedBudget,
  specialization,
}) => {
  return (
    <div className="tc bg-tangerine dib hover-bg-gold shadow-hover br3 pa3 ma2 bw2 shadow-5">
      <div className="fw3">
        <h2 className="dark-purple underline">{name}</h2>
        <p className="dark-purple">{description}</p>
        <p className="dark-purple">
          Estimated budget: <span className="b">{estimatedBudget}</span>
        </p>
        <h3 className="dark-purple">
          Specialization: <span className="b">{specialization}</span>
        </h3>
      </div>
      <div className="f3">
        <Button className="f4 b ma3 grow no-underline br-pill ph3 pv2 mb2 dib pansy-purple bg-peach">
          Details
        </Button>
        <Button className="f4 b ma3 grow no-underline br-pill ph3 pv2 mb2 dib pansy-purple bg-peach">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
