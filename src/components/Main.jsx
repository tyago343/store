import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';

export default () => {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </div>
    )
};