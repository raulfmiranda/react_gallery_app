import React from 'react';

const Nav = (props) => {
    return (
        <li>
            <img src={props.gif.data.image_url} alt="" />
        </li>
    );
}

export default Nav;