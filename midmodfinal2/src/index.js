import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";






ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  
    document.getElementById('root')
);

//Main root file. 
//this code is going to create the history object for the entire <App> component.
//The history.push method is invoked when you click on a <Link> component, 
//and history.replace is called when you use a <Redirect>.
