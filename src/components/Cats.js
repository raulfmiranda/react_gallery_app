import React, { Component } from 'react';
import Gallery from './Gallery';

class Cats extends Component {
    render() {
        return (
            <div>
                <Gallery query='cats' />
            </div>
        );
    }
}

export default Cats;