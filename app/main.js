import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './components/index';
import './axiosUnify'
import * as stores from './store/index';

render(<Provider {...stores}>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));


if (module.hot) {
    module.hot.accept();
}