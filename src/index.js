import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import './globalStyling';

render(<App />, document.getElementById('root'));
