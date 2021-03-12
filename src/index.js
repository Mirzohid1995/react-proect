import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import reportWebVitals from './reportWebVitals';
import LessonOttizUch from "./components/LessonOttizUch";
import LeesonOttizIkkiy from "./components/LeesonOttizIkkiy";
import LifeSiclMetods from "./components/LifeSiclMetods";
import Routing from "./components/Routing";
import PracticalWork from "./components/PracticalWork";
ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<LeesonOttizIkkiy/>*/}
    {/*<LessonOttizUch/>*/}
    {/*<LifeSiclMetods/>*/}
    {/*<Routing/>*/}
    <PracticalWork/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
