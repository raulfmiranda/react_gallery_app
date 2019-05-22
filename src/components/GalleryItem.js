import React from 'react';


const Nav = (props) => {
    return (
        <li>
            <img src={props.gif.images.fixed_height.url} alt={props.gif.title} />
        </li>
    );
}

export default Nav;