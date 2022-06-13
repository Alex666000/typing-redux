import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // из пакета redux - провайдер позволяет прокинуть состояние в компоненты: передаем "стор", который создали с помощью функции createStore:
    <Provider store={store}>
        <App />
    </Provider>

);
