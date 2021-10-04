import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {rootReducer} from "./Redux/rootReducer";

// const store = createStore(
//     rootReducer,
//     compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );
// Для продакшна
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
  <BrowserRouter>
      {app}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
