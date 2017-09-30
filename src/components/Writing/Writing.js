import React, { Component } from 'react';
import './Writing.css';

import { getWritingInfo } from './../../service';

export default class Writing extends Component {
    constructor() {
        super()

        this.state = {
            posts: []
        }

        getWritingInfo().then(response => {
            this.setState({posts: [...response]})
        })
    }
    
    render() {
        const writingPosts = this.state.posts.map((c,i) => {
            return (
                        <a href={c.hyperlink} target="_blank"><li className="writing-link">{c.title}</li></a>
            )
        })
        return (
            <div className="anw-container">
                <h2 className="anw-header">Writing</h2>
                <div className="anw-line"></div>
                <div className="anw-text">{writingPosts ? writingPosts : ""}</div>
            </div>
        )
    }
}

