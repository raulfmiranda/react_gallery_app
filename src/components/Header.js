import React from 'react';
import SearchBar from './SearchBar';
import Nav from './Nav';

const Header = () => {
    return (
        <React.Fragment>
            <SearchBar/>
            <Nav/>
        </React.Fragment>
    );
}

export default Header;