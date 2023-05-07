import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { YMaps } from '@pbe/react-yandex-maps';
import {store} from "./store/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      {/* незабудьте подставить свой ключ, а то не будет работать геокод и прочее*/}
        <YMaps query={{ lang: 'ru_RU', apikey: '657d88b6-d97f-4bc5-b587-49293a80fd18' }}>
          <App />
        </YMaps>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
