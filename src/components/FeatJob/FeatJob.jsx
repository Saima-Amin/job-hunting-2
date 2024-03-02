// import React from 'react';
import { Link } from 'react-router-dom';
import './FeatJob.css'

// eslint-disable-next-line react/prop-types
const FeatJob = ({ featuredJob }) => {
    // eslint-disable-next-line react/prop-types
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = featuredJob;

    return (
        <div className='featuredJob'>
            <img src={logo} alt="" />
            <h4>{job_title}</h4>
            <p>{company_name}</p>
            <div className='remote_job'>
                <h5>{remote_or_onsite}</h5>
                <h5>{job_type}</h5>
            </div>
            <div className='loca_salary'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>

            <Link to='/viewDetails'>
                <button className="details-btn"> View Details </button>

            </Link>
        </div>
    );
};

export default FeatJob;