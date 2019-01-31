import React, { Component } from 'react';
import './Generate.css';

class Generate extends Component {
    render() {
        return (
            <div className='generate'>
                <p>{this.props.number}</p>
            </div>
        );
    }
}
export default Generate;