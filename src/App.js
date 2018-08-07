import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import GroupPicker from './pages/GroupPicker';
import SortPicker from './pages/SortPicker';
import logo from './resources/logo.png';
import { GIRLS } from './util/Girls';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group: '3',
            girls: GIRLS
        };
        this.onReady = this.onReady.bind(this);
    }

    onReady(group, girlList) {
        this.setState({ group: group, girls: girlList });
    }

    render() {
        return(
            <div className='wrapper'>
                <div className='header flex flex-center'>
                    <Link to='/'>
                        <img src={logo} alt='PRODUCE 48 Logo' />
                    </Link>
                </div>
                <div className='content'>
                    <Switch>
                        <Route path='/sort' render={() => <SortPicker state={this.state} />} />
                        <Route render={() => <GroupPicker state={this.state} onReady={this.onReady}/>} />
                    </Switch>
                </div>
                <div className='footer' />
            </div>
        );
    }
}