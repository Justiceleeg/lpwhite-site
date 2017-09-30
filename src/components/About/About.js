import React, { Component } from 'react';
import './About.css';

import { getAboutInfo } from './../../service'

export default class About extends Component {
    
    constructor() {
        super()

        this.state = {
            info: ""
        }

        getAboutInfo().then(response => {
            this.setState({info: response[0].about_text})
        })
    }

    render() {
        return (
            <div className="anw-container">
                <h2 className="anw-header">About</h2>
                <div className="anw-line"></div>
                <p className="anw-text">{this.state.info ? this.state.info : ''}</p>
            </div>
        )
    }    
}