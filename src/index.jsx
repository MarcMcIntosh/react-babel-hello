import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

const wrapper = document.getElementById("root");
wrapper ? render(<App />, wrapper) : false;
