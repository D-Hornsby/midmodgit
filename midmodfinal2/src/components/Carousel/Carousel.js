//all my imports including my Pics from my images folder

import React, {useState} from 'react'
import './Carousel.css'
import elearch from './images/elearch.jpg'
import goblins from './images/goblins.jpg'
import squrleyguy from './images/squrleyguy.jpg'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


//passing images into the ({ source 1,2 and 3}) sets up props whti default values
//call back added to props tells Parent component that we changed image and print by console.log the source
function Carousel({ 
    src1 = elearch, 
    src2 = goblins, 
    src3 = squrleyguy, 
    callback = (src) => {console.log(src)}
}) 
{
    //set state to hold the order that the images are in and keep track as carousel moves
    //set up the array of sources, setSources and useState to pass the sources from the props. set state [setSources array]
    const [sources, setSources] = useState ([src1, src2, src3]);
    //this is to give my buttons functionality. Creating a const for each L and R
    //creat an empty array to hold sources after they move
    const shiftLeft = () => {
        const newOrder = []

        //populate the new order. newIndex decrementing the index. checking if its less then sources.len
        //if it is go back to end if not set to whatever is decrement
        sources. forEach((src, index)=>{
            const newIndex = --index < 0 ? sources.length -1: index
            
            //set sources to new order
            newOrder[newIndex] = src
            if(newIndex == 1) {callback(src)}
        })
        //setting the move
        setSources (newOrder)
    }
    //same as above but incrementing. these are set so when the begining or end is reached it will continue 
    //by looping going back to the begining or end which ever direction you are going
    const shiftRight = () => {
        const newOrder = []

        sources. forEach((src, index)=>{
            const newIndex = ++index >= sources.length ? 0: index
            
            newOrder[newIndex] = src

            if(newIndex == 1) {callback(src)}
        })

        setSources (newOrder)

    }

    //set up divs. outer div to be className(className for react) carousel. inner div for container.
    //inside container setting up in order of operations div for direction button l, div images, div direction button R 
    //adding onClick to each left and right for the shift
    return (
        <div className="Carousel">
            <div className="container">
                <div>
                    <FaAngleLeft onClick= {shiftLeft}
                    size= "35"/>
                </div>
                {sources.map((src, index) =>
                    <div>
                        <img id={'pic' + index} src= {src} alt="img"/>
                    </div>
                )}
                <div>
                    <FaAngleRight onClick= {shiftRight} 
                    size="35"/>
                </div>
            </div>
            
        </div>
    )
}

export default Carousel

//font awsome is used for my L and R buttons. Link added in HTML

//I was not seeing pics untill i gutted the render function in the index.js file and added a empty div. 


