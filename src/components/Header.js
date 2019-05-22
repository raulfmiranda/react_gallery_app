import React from 'react';
import SearchBar from './SearchBar';
// import Nav from './Nav';

const Header = (props) => {
    return (
        <React.Fragment>
            <SearchBar onSearch={props.onSearch}/>
            {/* <Nav/> */}
        </React.Fragment>
    );
}

export default Header;