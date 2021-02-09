
// import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import {Link, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';
// import './Home.css';
//for icon at top of navbar...they are not working
// import {FaFeather} from 'react-icons/fa';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 


//where so you want your Carousel
// import Carousel from './components/Carousel/Carousel'
import Home from "./components/Home2";
import Utah from "./components/Utah1";
import Form from "./components/Form";




// function App ()  {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }





 class App extends Component {
  render() {
    return (

      <>
      <Router>
         <div className="App">
            <NavBar/>
              <Switch>
                        
                        <Route path="/" component={Home}/>    
                        <Route path="/Utah1"component={Utah}/>
                        
                        {/* <Route path="/signUp"component={SignUp}/> */}
                        <div>
                        <Form/>
                        </div> 
                        
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










 