import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ fetchCats, fetchDogs, fetchComputers }) => {

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/' onClick={fetchCats}>Cats</NavLink></li>
                <li><NavLink to='/' onClick={fetchDogs}>Dogs</NavLink></li>
                <li><NavLink to='/' onClick={fetchComputers}>Computers</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;