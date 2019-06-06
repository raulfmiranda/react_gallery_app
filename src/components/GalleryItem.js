import React from 'react';

const GalleryItem = ({ imgUrl, imgTitle }) => {
    return (
        <li>
            <img src={imgUrl} alt={imgTitle} />
        </li>
    );
}

export default GalleryItem;