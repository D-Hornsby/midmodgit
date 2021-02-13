import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
//bootstrap is working but it was messing with other css and i was using it for a 
//slide out for the glass that i have scrapped for now and may go back to later 



//wrapping the app in the BrowserRouter and routing everything threw app. 
//BrowserRouter will allow me to handle dynamic request...HashRouter is for serving static so not for this

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
