// import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h2>Job Hunting</h2>
            <section>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedJobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </section>
            <button className='btn-applying'>Start Applying</button>
        </nav>
    );
};

export default Header;