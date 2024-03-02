// import React from 'react';
import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    // const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h2>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {
                    jobs.map(job => <Job
                    key={job.id}
                    job={job}
                    ></Job>)
                }
            </div>
            
        </div>
    );
};

export default Jobs;