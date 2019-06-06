import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

class Gallery extends Component {
    
    renderGifs  = (gif) => {
        return (<GalleryItem key={gif.id} imgUrl={gif.images.fixed_height.url} imgTitle={gif.title} />);
    }

    render() {
        const gifsArr = this.props.gifs.map(this.renderGifs);

        return (
            <div className="photo-container">
                {
                    gifsArr.length > 0 ? <h2>Results</h2> : <NotFound/>
                }
                <ul>
                    { this.props.loading && <div>loading</div> }
                    { !this.props.loading && gifsArr }
                </ul>
            </div>
        );
    }
}

export default Gallery;