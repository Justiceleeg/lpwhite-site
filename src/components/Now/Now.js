import React, { Component } from 'react';
import './Now.css';

import { getNowInfo } from './../../service';

export default class Now extends Component {
    
    constructor() {
        super()
        
        this.state = {
            info: ""
        }

        getNowInfo().then(response => {
            this.setState({info: response[0].about_text})
        })
    }
    
    render() {
        
        return (
            <div className="anw-container">
                <h2 className="anw-header">Now</h2>
                <div className="anw-line"></div>
                <p className="anw-text">{this.state.info ? this.state.info : ''}</p>
            </div>
        )
    }
}

