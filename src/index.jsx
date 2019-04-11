import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import { BrowseRouter, Route } from 'react-redux';
import Store from './redux/store.js';
import Provider from 'react-redux';
ReactDOM.render(
    <Provider store={Store}>
        <BrowseRouter>
            <Route path='/' component={Main} />
        </BrowseRouter>
    </Provider> ,
    document.getElementById('app')
)
