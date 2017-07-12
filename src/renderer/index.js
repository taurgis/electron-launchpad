import React from 'react';
import { render } from 'react-dom';
import Main from './main.jsx';

// Unhandled rejections
const unhandled = require('electron-unhandled');
unhandled();

render(<Main />, document.getElementById('root'));
