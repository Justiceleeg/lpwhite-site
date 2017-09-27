import React, { Component } from 'react';
import './About.css';

import { getAboutInfo } from './../../service'

export default class About extends Component {

    render() {
        console.log(getAboutInfo())
        return (
            <div>About Page</div>
        )
    }    
}