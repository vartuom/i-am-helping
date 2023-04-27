import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { YMaps } from '@pbe/react-yandex-maps';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>  
        <YMaps query={{ lang: 'en_RU' }}>
          <App />
        </YMaps>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
