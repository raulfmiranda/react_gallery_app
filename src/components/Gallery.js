import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = (props) => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                { props.gifs.map(g => <GalleryItem gif={g}/>) }
                <NotFound/>
            </ul>
        </div>
    );
}

export default Gallery;