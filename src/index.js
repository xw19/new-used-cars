import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter} from 'react-router-dom'
import { saveState } from './actions/localStorage'
import throttle from  'lodash/throttle'
import './index.css'

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
