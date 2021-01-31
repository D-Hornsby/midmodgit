import React, {useState} from 'react'
import './Carousel.css'
import elearch from './images/elearch.jpg'
import goblins from './images/goblins.jpg'
import squrleyguy from './images/squrleyguy.jpg'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import src from 'image/avif'


function Carousel({ 
    src1 = elearch, 
    src2 = goblins, 
    src3 = squrleyguy, 
    callback = (src) => {console.log(src)}
}) 
{
    const [sources, setSources] = useState ([src1, src2, src3]);

    const shiftLeft = () => {
        const newOrder = []

        sources. forEach((src, index)=>{
            const newIndex = --index < 0 ? sources.length -1: index
            
            newOrder[newIndex] = src
            if(newIndex == 1) {callback(src)}
        })

        setSources (newOrder)
    }

    const shiftRight = () => {
        const newOrder = []

        sources. forEach((src, index)=>{
            const newIndex = ++index >= sources.length ? 0: index
            
            newOrder[newIndex] = src

            if(newIndex == 1) {callback(src)}
        })

        setSources (newOrder)

    }

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
