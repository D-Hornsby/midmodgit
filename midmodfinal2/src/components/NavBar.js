import React, {useState} from 'react';

import {Link} from 'react-router-dom';
import {Button} from './Button';
import './NavBar.css';
import { FaBeer } from 'react-icons/fa';


// ln 2 for the icon on sidebar
//setting up the handleClick in the div for menu-icon
//to go with the setClick under function NavBar to toggle the click from true to false
//creating state with click , true or false to switch navBar from hamburger to bars
//will toggle

//setClick is my setState with the state created with click for my font awsome
//const setClick and handleClick are toggling false true false true the accual change
// in the hamburger ln 19, 20
// <ul className= {click ? 'nav-menu active' : 'nav-menu'}> is so nav dissapears when clicked
function NavBar() {

    const [click, setClick] = useState(false);
    const [button, setButton]= useState(true);
    const handleClick = ()=> setClick(!click);

    const closeMobileMenu =()=> setClick(false);

    const showButton =()=>  {
        if(window.innerWidth <= 900){
            setButton(false);

        }else{
            setButton(true);
        }
    }


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
                    DLH <i class="fas fa-umbrella-beach"></i>
                    </Link>
                    
                     {/* <div className='menu-icon' onClick={handleClick} />
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/> */}
                        </div> 
                
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                        
                        <li className= 'nav-item'>
                            <Link to ="/"className='nav-links' onClick= {closeMobileMenu}>
                                Home</Link>
                                </li>

                                <li className= 'nav-item'>
                            <Link to ="/utah"className='nav-links'onClick= {closeMobileMenu}>
                                Utah</Link>
                                </li>

                                {/* <li className= 'nav-item'>
                            <Link to ="/signup"className='nav-links'onClick= {closeMobileMenu}>
                                SignUp
                                </Link>
                            </li> */}
                    
                     </ul>
                     {button && <Button buttonStyle='btn--outline'>SignUp</Button>}
                <div/>

            </nav>
        </>
      );
    }

    

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