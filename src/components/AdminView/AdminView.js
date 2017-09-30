import React, { Component } from 'react';
import './AdminView.css';
import axios from 'axios';

import { getAboutInfo, getNowInfo, getWritingInfo } from './../../service';

export default class AdminView extends Component {

    constructor(){
        super()

        this.state = {
            pass: "",
            display: false,
            aboutText: '',
            nowText: '',
            writingTitle: '',
            writingLink: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.passSubmit = this.passSubmit.bind(this);        
    }

    handleChange(e) {
        this.setState({pass: e.target.value})
    }

    passSubmit() {
        const nowInfo = axios.put( 'http://localhost:8000/api/pass', {pass: this.state.pass} ).then(response => {
            this.setState({display: response.data.pass})
        });
    }

    render() {
        return (
            <div>
                {/* <form className={this.state.display ? 'hide' : ''} onSubmit={this.passSubmit}>
                    <input value={this.state.pass} onChange={this.handleChange} type="text"/>
                    <button>Submit</button>
                </form> */}
                {/* className={this.state.display ? '' : 'hide'} */}
                <div>
                    <div className="admin-section">
                        <h2 className="anw-header">About:</h2>
                        <p className="anw-text">122</p>
                        <form>
                            <input type="text"/>
                            <button>Submit</button>  
                        </form>
                    </div>
                    <div className="admin-section">
                        <h2 className="anw-header">Now:</h2>
                        <p className="anw-text">222</p>
                        <form>
                            <input type="text"/>
                            <button>Submit</button>  
                        </form>
                    </div>
                    <div className="admin-section">
                        <h2 className="anw-header">Writing:</h2>
                        <form>
                            <input type="text"/>
                            <input type="text"/>
                            <button>Submit</button>                                
                        </form>
                    </div>
                </div>
            </div>
        )
    }    
}