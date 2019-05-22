import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = (props) => {

    let gifs;
    if (props.gifs.length) {
        gifs = props.gifs.map(g => <GalleryItem gif={g}/>);
     } else {
        gifs = <NotFound/>
     }

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {gifs}
            </ul>
        </div>
    );
}

export default Gallery;