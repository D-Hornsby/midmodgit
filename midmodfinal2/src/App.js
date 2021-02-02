
// import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import {Link, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';

// import Carousel from './components/Carousel/Carousel'
import Home from "./components/Home";
import Utah from "./components/utah";
import SignUp from "./components/signUp";


 class App extends Component {
  render() {
    return (

      <>
      <Router>
      
    
          <div className="App">
            <NavBar/>
              <Switch>

                  <Route path="/" component={Home}/>
                  <Route path="/utah"component={Utah}/>
                  <Route path="/signUp"component={SignUp}/>
                
              </Switch>
            </div>
     
         </Router>
      </>
    
    );
  }
}




export default App;

//path is the Prop for <Route> if it matches path name it gets reandered
//<Link> navigates to URL between pages only view re-rendered without a full page refresh
//switch is added so only the first child route that matches gets rendered

//this is for the carousel an needs to be added into the set up

// function App() {
//   return (
//     <div >
//      <Carousel />
//     </div>

//   );
// }










 