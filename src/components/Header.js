import React from 'react';


const Header = ({ navComponent, searchBarComponent }) => {
    return (
        <header className="header">
            {searchBarComponent}
            {navComponent}
        </header>
    );
}

export default Header;