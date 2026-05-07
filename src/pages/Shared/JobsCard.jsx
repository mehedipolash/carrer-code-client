import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    title,
    company,
    location,
    category,
    applicationDeadline,
    description,
    company_logo,
    requirements,
    salaryRange,
    _id,
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-4 items-center p-4">
        <figure>
          <img
            src={company_logo}
            alt={company}
            className="w-16 h-16 rounded-full object-cover"
          />
        </figure>

        <div>
          <h3 className="text-2xl font-bold">{company}</h3>

          <p className="flex items-center gap-2 text-gray-500">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title flex justify-between items-center">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p className="text-gray-500">{description}</p>

        <div className="card-actions">
          {requirements?.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>

        <div className="card-actions">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold text-primary">{category}</p>

          <p className="text-sm text-gray-500">
            Deadline: {applicationDeadline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
