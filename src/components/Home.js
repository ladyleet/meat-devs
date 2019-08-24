import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <h2>Welcome to Meat Devs!</h2>
            <p>Where the swine and bovine loving developers congregate.</p>
            <p>Take a look around and <Link to='/contact/'>tell us</Link> what you think</p>
        </React.Fragment>
    );
}

export default Home;