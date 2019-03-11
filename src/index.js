import 'babel-polyfill' // Import evitar errores en llamadas con fecht 

import React from 'react';
// import './index.css';

import { render } from 'react-dom'
import Root from './containers/AsyncExamples/Root'

import * as serviceWorker from './serviceWorker';

render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
