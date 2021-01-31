import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel'


function App() {
  return (
    <div >
     <Carousel />
    </div>

  );
}




// import Carousel from "react-simply-carousel";

// const photos = 
//   {
//   name: 'Photo1',
  
//   name: 'Photo2',

//   name: 'Photo3'
// },


// class App extends Component{
//   state = {
//     activeSlideIndex: 0,
//   };
//   setActiveSlideIndex = (newActiveSlideIndex) => {
//     this.setState({
//       activeSlideIndex: newActiveSlideIndex,

//     });
//   };

//   render(){
//   return (
//     <Carousel>
//       activeSliChange={this.state.activeSlideIndex}
//       onRequestChange={this.setActiveSlideIndex}
//       itemsToShow={3}
//       intemsToScroll={3}
  
//     <div style= {{width: 300, height: 300 }}>slide 0</div>
//     <div style= {{width: 300, height: 300 }}>slide 1</div>
//     <div style= {{width: 300, height: 300 }}>slide 2</div>
// </Carousel>
    
    
//     );
//   }
// }


export default App;
