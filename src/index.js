import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './Service/serviceWorker';

 const root = document.getElementById('root');

if( root != null ) {
    ReactDOM.render(<App />, root);
    serviceWorker.unregister();
}


