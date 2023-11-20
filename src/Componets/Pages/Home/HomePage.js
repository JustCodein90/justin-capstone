// Define HomePage componet
import React from 'react';

import { HomeNav } from '../../Layout/Navbar/HomeNav';

const Homepage = () => {
    return (
        <div className="Homepage">
          <HomeNav />
            <section className="hero is-fullheight is-dark">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Welcome to the Bulma React Template</h1>
                        <h2 className="subtitle">
                            This template provides you with a starting point for building web applications with Bulma and React.
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;