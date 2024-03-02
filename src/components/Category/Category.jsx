// import React from 'react';
import './Category.css'

// eslint-disable-next-line react/prop-types
const Category = ({category}) => {
    // eslint-disable-next-line react/prop-types
    const {logo, category_name, availability} = category;
    return (
        <div className="category">
            <img src={logo} alt="" />
            <h4>{category_name}</h4>
            <p>{availability}</p>
        </div>
    );
};

export default Category;