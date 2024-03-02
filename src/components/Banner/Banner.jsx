// import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <section className="banner-details">
                <div className="banner-title">
                    <h2>One Step <br />
                        Closer To Your <br />
                        <span className="dreamjob">Dream Job</span>
                    </h2>
                </div>
                <div className="banner-subtitle">
                    <p>Explore thousands of job opportunities with all the <br />information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                </div>
                <div>
                    <button className='btn-getStarted'>Grt Started</button>
                </div>
            </section>
            <section className="banner-img">
                <img src="/src/images/user.png" alt="" />
            </section>
        </div>
    );
};

export default Banner;