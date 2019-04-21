import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Store from './redux/store.js';
import {Provider} from 'react-redux';
ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Route path='/' component={Main} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);