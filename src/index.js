import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import './index.css';
import About from './components/About/About';
import AdminView from './components/AdminView/AdminView';
import NavSection from './components/NavSection/NavSection';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Writing from './components/Writing/Writing';
import Now from './components/Now/Now';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <div id="wrapper">
        <div className="container">
            <NavSection />
            <Switch>
                <Route exact path='/' component = {Home} />
                <Route path='/admin'component = {AdminView} />
                <Route path='/about'component = {About} />
                <Route path='/writing'component = {Writing} />
                <Route path='/now'component = {Now} />
                <Route path="*" component={Home} />
            </Switch>
            <Footer />
        </div>
    </div>
</Router>
, document.getElementById('root'));
registerServiceWorker();
