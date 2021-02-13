import React, { Component } from 'react';
import './Home.css';
// import goblins from './Carousel/images/goblins.jpg';


//I made a home page that renders with my NavBar and holds my cards on the glass
//I wrapped my cards in places so i can add more later easly
//I have the cards inside the glass but under the heading on the main 
//but i added my circles outside the glass section so i could move them as i please on the main



class Home extends Component {
    render() {

        return(
            <main>   
                <section className="glass">

                    <br/>

                    <div className="heading">

                    <h1> Wandering West</h1>
                    <h2>Your never lost in the search for beauties in nature.</h2>
                    <p> A trip was planned, the list was routed. Time was getting near.
                        Wildfires in the Western United States rerouted part of this adventure but only to find new beauties. In some pictures the skys look muted and hazey from the ash of wildfire season 2020.</p>

                    <br/>
                   
                    
                    </div>

                    <div className="places">
                        <div className="cards">
                            <div className="card">South Dakota</div>
                            {/* <img src="./Carousel/images/goblins.jpg" alt=""></img> */}
                            <div className="card-info">
                                <h2>Land of Great Faces</h2>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="card">Utah</div>
                            {/* <img src="./Carousel/images/goblins.jpg" alt=""></img> */}
                            <div className="card-info">
                                <h2>Wilderness of Rock</h2>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="card">Colorado</div>
                            {/* <img src="./Carousel/images/goblins.jpg" alt=""></img> */}
                            <div className="card-info">
                                <h2>Garden of the Gods</h2>
                            </div>
                        </div>

                    </div>

                </section>

                    <div className='circle1'></div>
                    <div className='circle2'></div>
                    

                </main>  
                
        );
        
    };
};

export default Home;

