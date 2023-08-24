import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import './index.css';
import configureStore from 'redux/configureStore';
import reportWebVitals from './reportWebVitals';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root store={store}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
