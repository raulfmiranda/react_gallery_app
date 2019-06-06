import React, { Component } from 'react';
import Gallery from './Gallery';

class Dogs extends Component {
    render() {
        return (<Gallery query='dogs' />);
    }
}

export default Dogs;