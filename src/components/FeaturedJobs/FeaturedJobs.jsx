import { useState, useEffect } from 'react';
import FeatJob from '../FeatJob/FeatJob';
import './FeaturedJobs.css';

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);

  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  const handleSeeAllJobs = () => {
    setShowAllJobs(true);
  };

  return (
    <div className="featuredJobs-section">
      <h2> Featured jobs </h2>
      <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="featuredJobs">
        {featuredJobs.slice(0, showAllJobs ? featuredJobs.length : 4).map((featuredJob) => (
          <FeatJob key={featuredJob.id} featuredJob={featuredJob} />
        ))}
      </div>
      {!showAllJobs && (
        <button className="btn-see-all" onClick={handleSeeAllJobs}>
          See All Jobs
        </button>
      )}
    </div>
  );
};

export default FeaturedJobs;
