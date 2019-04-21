import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';

export default () => {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login}/>
            </Switch>
        </div>
    )
};