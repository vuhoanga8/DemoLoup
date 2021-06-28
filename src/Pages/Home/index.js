import React from 'react';
import {
    Link
  } from "react-router-dom";

const Home = props => {
    return (
        <div>
            This is home page
            <nav>
                <ul>
                    <li>
                    <Link to="/recipes">Recipes</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;