// import React from 'react';

// eslint-disable-next-line react/prop-types
const Job = ({job}) => {
    // eslint-disable-next-line react/prop-types
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

    return (
        <div className="job">
            <img src={logo} alt="" />
            <h4>{job_title}</h4>
            <p>{company_name}</p>
            <div className="job-type-btn">
                <button>{remote_or_onsite}</button>
                <button>{job_type}</button>
            </div>
            <div className="location-salary">
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button>View Details</button>
        </div>
    );
};

export default Job;