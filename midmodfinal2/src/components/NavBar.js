import React, {useDebugValue, useState} from 'react';

import {Link} from 'react-router-dom';
import {Button} from './Button';
import './NavBar.css';

// import { GiBoots } from "react-icons/gi";

//http://react-icons.github.io/react-icons/icons?name=fa
//above is the site i was usning with the icons

// ln 2 for the icon on sidebar
//setting up the handleClick in the div for menu-icon
//to go with the setClick under function NavBar to toggle the click from true to false
//creating state with click , true or false to switch navBar from hamburger to bars
//will toggle

//setClick is my setState with the state created with click for my font awsome
//const setClick and handleClick are toggling false true false true the accual change
// in the hamburger ln  20,21

// <ul className= {click ? 'nav-menu active' : 'nav-menu'}> is so nav dissapears when clicked
function NavBar() {

    const [click, setClick] = useState(false);
    const [button, setButton]= useState(true);
    // const handleClick = ()=> setClick(!click);

    function closeMobileMenu() {
        return setClick(false);
    }

    const showButton =()=>  {
        if(window.innerWidth <= 900){
            setButton(false);

        }else{
            setButton(true);
        }
    }

//slide for nav bar if i can get it to work..= anomious function
  //this nav bar was not working like i wanted it to.  it was doing a 
  //flash out and not behaving at all i wanted this to be my glass that 
  //slid out with the nav bar on it but for now its going to sit


    // const navSlide = ()=>{
    //     const burger = document.querySelector('.burger');
    //     const navBar = document.querySelector('nav-links');
    //     const navLinks = document.querySelector('.navLinks li');

    //     burger.addEventListener('click', () => {
    //         navBar.classList.toggle('nav-active');
    //     });
    // }
    //envoke  animate links nav.slide so it works
    // const app = ()=>{
    //     navSlide();
        
    // }



//useEffect is for my icon 

    // useEffect(()=>{
    //     showButton();
    // }, []);
    window.addEventListener('resize', showButton);


        //create state with click? to toggle back an forth for hamburger and bars
      return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                   
                    <Link to='/' className='navbar-logo' >
                      DLH {/*{GiBoots} */}
                    </Link>
                    
                     {/* <div className='menu-icon' onClick={handleClick} />
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/> */}

                        </div> 
                
                    <div className= {click ? 'nav-menu active' : 'nav-menu'}>
                        
                        <div className= 'nav-item'>
                            <Link to ="/Home2"className='nav-links' onClick= {closeMobileMenu}>
                                Home</Link>
                                </div>
                                

{/*                                 
                                 <div className= 'nav-item'>
                            <Link to ="/utah1"className='nav-links'onClick= {closeMobileMenu}>
                                Utah</Link>
                                </div> 
                                 */}

                                 {/* <div className= 'nav-item'>
                            <Link to ="/signup"className='nav-links'onClick= {closeMobileMenu}>
                                SignUp
                                </Link>
                            </div>  */}
                    
                     </div>


                     {/* <div className= "burger">
                         <div className="line1"></div>
                         <div className="line2"></div>
                         <div className="line3"></div>
                     </div> */}


                     {button && <Button buttonStyle='btn--outline'>SignUp</Button>}
                <div/>

            </nav>
            
        </>
      );
    }

// I did build 2 hamburger buttons here looking for how i want it
// when i finish i will remove the one not used
   //at first i was setting up on my nav bar to take me back home but that was a repeated function 
   //thin i wanted my glass to slide out with cards on it using the hamburger but for now my glass is 
   //not animated. due to time these are sitting for later. 
   //i also considered using them with the moble fearure but that is not completed at this time
          
        
        



    //i took out the signup but i might add something. I liked the button better. 
    //button added but ...not sure yet may use link after all dep on how it looks
    

  export default NavBar;

  //ul className click line is so when your on moble if you click it the nav menu to dissapear
//defining closeMobleMenu on line under const [click, setClick] then create the function
//for closeMobleMenu and set to false

//copied li for the second and third cataglory named services and products and changed links to match
//for the last copy past change to a sign up that will be a button dissapears will have a diff class name only shows on moble

//add a new componet file for button or finish it here..or ...i dont think that will work

//  if else is for smaller screens. the button will dissapear on smaller screens. 

//useEffect added to line 1 and 22-25 right now, the button on the nav bar would randomly show up 
//useEffect says to render 1 time then not show up all weard when refreshed on smaller screens. 
//this is passed into an empty array

//closeMobileMenu added to line 38 so when the logo is clicked it will close to home page