// import React from 'react';

import { useEffect, useState } from "react";
import Category from "../Category/Category";
import './Categories.css'

const Categories = () => {
    const [categories, setCategories] = useState([]);
    // const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="categories-section">
            <h2>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="categories">
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;