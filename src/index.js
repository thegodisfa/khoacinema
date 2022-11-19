import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DOMAIN } from './util/Settings/config';
import * as signalR from '@aspnet/signalr'
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();
connection.start().then(() => {
    root.render(

        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    );
}).catch(errors => {
    console.log(errors)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
