
What I am trying to do here is create something so I can share my pictures with family from our vacation. 
I documented the trip for my aunt and my dad. It was the first time my aunt got to travel west and many placed I had never been before. Any trip with my dad is an adventure. He takes his time to seak out things he has never seen an off the beaten path and to visit old fav's. 


My goal is to make a photo carousel with cards for each location and/or trip that you can click into and view the slide show. I will start with just this one trip but the photos are shot in raw and various methods so that will be another task in its self ..wish me luck!


I have looked at so many ways to do the carousel slide show and I have tried a few. I am trying to find a method that fits the needs of the assignments. 
In my search I found that react has had a React Slick carousel component built in. I set up a new folder again and were going to give it a shot.


----------------------
I found the installation tag for npm here

https://react-slick.neostack.com/docs/get-started/

to start changing function app.js to a class. 
class App extends Component and changing the import to 
import React, {component}...

dena dont forget the ,
add your render line

now says logo is not defined...i forgot to remove logo from the div so it was the react logo. 

add h tag to see if im working,..yaa it says hello!!

next...in terminal
npm install react-slick --save

then
npm install slick-carousel --save
wow it seams like it worked..ok cool

found out that that is nolonger supported when i dug deeper. 
trying something else

-------------------------

npm install react-simply-carousel --save

seamed to install..now to try it


ok...trying something new

So I found that that is nolinger maintained also and others were having bugs. I am going to try to build it with things I have learned but really im unsure of all i need to make it work. I will try to puzzle a few ideas to gether and see what I can find. When it works I will celebrate somehow as I have spent days looking in to so much my mind has melted. I may of bit off more then I can chew. 
 
 im going to just try to build the component for this now 
 and see if i can make it work.

 i know i need to import and link it to my app.js and put the Carousel object in the divs i cleaned the logo out of. 
 i need arrow icons 
 i found this tag...i think i can use this  import src from 'image/avif'

 avif

 https://blog.logrocket.com/how-to-format-quality-images-using-avif-squoosh-and-go-avif/

 ok ill list out the set up that I seen used in class and name them meaniful to keep it as clear as possible. 

 doing 
 npm install react-icons for my icons used on my photo slide
 not sure if this will work but i found the suggeston to try it
 I found a github for 

 react-icons.github.io/react/icons/icons?name=fa
 
 there is a lot of icons here ...
 Fa is for Font Awsome

 im going to import everything. the past carousel i couldnt get to work and maybe my pics were the issue 
 i have renamed my photos to pic's and im going to import them like the other stuff and see what happends. 

 using rfce to let vs set up my react fuctional component...
. 

 adding props into the ()
of this function. 

Mitchell Grafton..just to remember for pics to test. great pottery artist btw. 

function Carousel() 
the images need to be passed into the ({ source 1, 2 and 3}) and also tell the parent componenent that we just changed the image so the call back will need to be put in props as well. call back will print console.log update

--------------dena----------------

    ****get the anwer!!!****
----------------------------------

set up the props with default values 
inside ({}) 
prop = default value. 
source 1 will be pic1 ect
for the call back we are going to consol.log out whatever the source is

inside the return { } but before the return we will set state
the set of state will hold the order that the images are in and keep track as the carousel moves.

Im changing my sources to src so they are different when i do the const. I was trying to keep it clear. 
so set up the array of sources, setSources and useState here to pass in the sourses form the porps
set state [setSources] array

setting up div's
the outer div will be className of carousel
(make sure its className not class for react!)

inner div 2 will be for container
inside container i need the direction button so div's for those called form  FaAngle 
so set up in order...icon, images, icon

the images will need the map targeting the index of the array 
under that add the images

the images will need a key for the index. each image will have a different key. 
images pulled from the source...src={src}..

the images will have an id. pic = index 
after getting the order of operations set up add the right icon in the next div

i had a syntax error...a couple inverted letters and i use {} where i should of used ()


lifecycle of a react components


https://files.slack.com/files-pri/T9KJM7QJX-F01M3QL7L6L/react-components-lifecyle-diagrams.jpg

it kep giving me this error...for like hours. i changed some things. tryed turning src back to sources becouse in the code the setSorces look weard

TypeError: sources.map is not a function
Carousel
src/components/Carousel/Carousel.js:21
  18 | return (
  19 |     <div className="Carousel">
  20 |         <div className="container">
> 21 |             <div>
     | ^  22 |                 <FaAngleLeft/>
  23 |             </div>
  24 |             {sources.map((src, index) =>
View compiled
▶ 21 stack frames were collapsed.



error was in line 16

const [sources, setSources] = useState (src1, src2, src3);

i had this. i put it in [] but it was unhappy so i tryed that and it was happier 
but it made outher sources weard. what i needed was ([src1, src2, src]); 
i knew it had to be an array but i just had it wrong. also i found that i was missing 
; and had a spelling on a src inverted


the index.js was causing problems from how it was set up so i gutted the render function 
and put a div in it for now

I SEE PICTURES!!!

they are in a colum and the buttons do not work. the page is layed out all wrong. ill add some css to see what happends

the hardest part about this code is the source src. i changed them around alot and confused myself. 

This is the first time i imported the photoes like that. i also renamed them this time. 
I tried using some of mine now but they are too big for tinypic and dont seam to want to work. I have more work to do there. It can take a bit to get the photos how i want them i hope i have time. 

CSS

to remove all the extra padding and spacing that come with the basic elements
using a *
* i seen this used before and i didnt know what it was. 

'The * selector matches all elements in the DOM. You use the star selector without knowing it. When you use other selectors like class or element, they already imply the star selector.' 
I had some issues in the past and wonder if this selector would fix some. 
I added this and i 'see' no changes but I understand the valuel

i need my pictures to go left to right so...the Carousel is what ill start with. also the buttons are tiney and need to be placed like i want them. 
im targeting the container of the carousel

displaying flex and setting to row worked really well. the pics are really big and have no spacing. 
my pixs turned out different but i didnt set the size of the accual photo so that makes some sense. i tryed to fix this with .Carousel img but it kinda didnt work like that. 
i want the middle img to be bigger and right now its the smallest. 

.Carousel #pic2...i did not know you can do this but in line 26 in Carousel.js we set the id to the index. 

i need to give some thougth to my pic sizes. its working but not like i want it to. 
im adding the 
Carousel.js becouse it took me a while to get it working and im about to mess with it to get the buttons to work.


import React, {useState} from 'react'
import './Carousel.css'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


function Carousel({ 
    src1 = pic1, 
    src2 = pic2, 
    src3 = pic3, 
    callback = (src) => {console.log(src)}
}) 
{
    const [sources, setSources] = useState ([src1, src2, src3]);

    return (
        <div className="Carousel">
            <div className="container">
                <div>
                    <FaAngleLeft/>
                </div>
                {sources.map((src, index) =>
                    <div>
                        <img id={'pic' + index} src= {src} alt="img"/>
                    </div>
                )}
                <div>
                    <FaAngleRight/>
                </div>
            </div>
            
        </div>
    )
}

export default Carousel


https://www.w3schools.com/react/react_css.asp
you can style in js I havent done it for a while. This is what i used to refresh. 

its getting late and I need a nap. ill watch the video alex put up about hooks being I been trying to look into them more. 
everything is working ok at this time but things are not how I have them layed out in my wireframe to be. 

its acting up. i have the first pic half off the page and the middle pick dont want to adjust properly. 

under the state before the return
adding a function to get the buttons working 
make a const for each left and right and create an array to hold sorces after they move
set sourses to new order and 
above
populate new order
so const newIndex incrementing the index, checking to see if its greater then sources.length

if it is we will go back to the begining otherwise set to what ever that increment is. 
this will make it keep looping starting from the begining again and the same for the other way will be set so if -- the index and if its o go back to the end

ok i missed something its not working
so set the new order, the array of new index set to src

newOrder[newIndex] = src is exacually where it is  
should move it over 1

dont forget to add the onclick for the shift left and shift right to the button

ok so its acting up.Im trying to figure out how to fix it

https://reachlightspeed.com/blog/using-the-new-high-performance-avif-image-format-on-the-web-today/

yep still not working. 
i have reached out. i have tried several ways and using the avif was working for a second but now its not and i have done everything i can find
ok Jade is a genious. He removed 1 line and it worked. 

works but
it is bahaving badly and im having trouble getting it to let me style it. 

edit...i have found some css that takes out the residual tweeky in the back 9
i have added this above the * ...i had no idea

end edit

im going to work on something else. ill come back to stylig Carousel is working but not pretty. 

removed my first carousel and a tag to the bottom here. I want to look at it again when i have more time!!!




 
i want a main page or home section. i like the glass style. I may try that. 
not sure yet how I want to approch it but starting with setting up the divs and linking pages
im using 
<li><a herf="/">Home</a></li> 
to start on that. 

i started setting this up on app.js but i think i will make a main or home.  Not sure what to call it.  

I want that nav bar icon and my initials at the top for im going to import the fontawsome page in my html. 

remember Elements are what components are “made of"

I am working on making my components and getting them routed correctly. 
I am using the nested routing method. 
using router switch route
and with my home rout ill have "/" so it will return to home when it hits /

interesting Note: Behind the scenes a <Link> renders an <a> with a real href, so people using the keyboard for navigation or screen readers will still be able to use this app.

Rout matchers ....like switch
https://reactrouter.com/web/guides/primary-components
lots of info 
https://reactrouter.com/web/api/Switch

this might be the idea i need for later when i have multible vacation places. 
just putting here to not lose the idea for later
https://reactrouter.com/web/guides/quick-start



I made the app.js page...or changed it and made the nav bar i was building a component file. I need this to be my base file. Im going to register all the routs in my app.js file so i dont want the components in here. 
ill put the links in here and REMEMBER to rout home to (/)!!

i want my router to handle dynamic request so im using the BrowserRouter 
the HashRouter is for serving static request

**change your import tag Dena to include this

im making a main page that im understanding is were i will rout everything back to the app page where the routs will be registered. 
i am adding Browser Router in main were i can render the BrowserRouter object
I wrapped app in the BrowserRouter tags and changed app to root

edit

the BrouserRouter is in index.js that is my main. this is where my app is wrapped in the BR tag
BrouserRouter import is in App.js. 

in App.js i imported navbar and its components...

end of edit

edit 2
I have made a home page that renders with my nav bar and holds my cards on glass. still figuring it out. the css it really trick here but its really neet. 
end edit

i need components for each of my NavBar elements ...I guess i will do the one as Utah but later I want to add a Main (now my index) component and have all the places and or events under that. For now I have Home, Utah and the SignIn.  I need to get the carousel to work in Utah. keep the componets simple, import render return and export

I was going to put these all in pages, I may later. Trying to keep it simple for routing. 
-----------

in my parent app.js im going to tell the children what to do. im going to set up the route. 

inside an empty fregment you can group a list of children without adding extra nodes to the DOM)
Can you style fregments?

i dont think so...

link above goes over the router to my navbar switch route paths. 

-----
my NavBar. im using useEffect becouse i liked the little icon i picked from fontAwsome

****edit...ok i forgot to add the link and now going back an seeing that i wish i had. 

not working 
***end of edit

----------------
i need my nav bar to work. 
set up every thing in order starting with NavBar
then the NavBar container to hold the 3 pages
i want to add my initals and the little logo at the top 
also i like the hamburger toggle butten to take you back home. 

***edit ...i think i want my hamburger to work for my mobile pages but will need those to work forst

**end edit

then im adding my 3 pages. im putting booleans on everything
if true..if false
i want to be able to click the word!
im going to use the link tag instead of the button becouse i like it and i want it to look cleaner then each page having a button.

useParams
Provides access to search parameters in the URL

******************

this was all working with borrowed css to check. im commenting that out and trying to do 
...uhhh...i want to use the glass with the nav bar. i want to have a full photo page and have the bar come out on a piece of frosted glass

may have to do this when i get more time. 

************

trying to style the nav page like i want it. 
starts being off at align-items under 
NavBar ...

straightened up when i commented out app.css... css in there from the start

i have an error. 
going on 10:30
things are getting crazy

index.js:1 Warning: Invalid DOM property `class`. Did you mean `className`?
    at i
    at a
    at LinkAnchor (h

    my index.js dont have much in it. 
    it says i need a web pack. 

    ok...i found where i used class instead of class name with the hint above i was just so tired i could not see it. i think it fixed it but now it says paused in debugger...
    ok it loaded but still have errors. 

nop still says the same thing. 

its saying i had an error in signups...i could not get into my signups file...i tried to have it remake the file. im not sure why this happended. I deleated it i guess im redoing what i had. I tried to get it back but i think i really deleated it. learning the hard way. 
 
 having trouble loading again 
 i commented out the signin in my app.js and now its doing the same thing to utah. 
 home is ok but utah says

  Unable to open 'utah.js': Unable to read file '/Users/denahornsby/Desktop/midmodgit/midmodfinal2/src/components/Utah.js' (Error: Unable to resolve non-existing file '/Users/denahornsby/Desktop/midmodgit/midmodfinal2/src/components/Utah.js').

  the page is back up tho. i have been rebuilding the nav so maybe i just need to move forward. maybe remake my signin tomorrow and comment the build in here. i was doing this in the pages and started doing this when it got to be too much.
  it makes the page look messy. 

  tryed putting the components in a div so they would act indpendantly but didnt work. Might still work with what i want to do. 
  I got the nav bar to go vertical and is responsive with screen size but its a mess. 
  
  Home is not showing on flexed nav bar




****

taking out of my app.js 

I worked on that for a while i was tryint to get the nav bar to slide out with the hamburger button and react for moble but i have spent way way to much time on this and i just need to get a front page im ok with. i commented out stuff that was not working like i wanted and i gess went backwords again. 
really i wanted to make this glass that came out with the click but maybe ill try it more simple. 

ok ...feel like im starting over again. my font awsome stuff is not working. ive tryed to fix it but im putting it down and try to get my front page somewhere so i can feel some success that would be nice!!
also i still need to remake my signin 


npm install --save font-awesome
 
 trying agian before i give up
 import '../node_modules/font-awesome/css/font-awesome.min.css'; 
for my import

ok. that didnt work either. i guess i dont need it but anyway. i commented it all out and now i have no errors with what i do have. ..so far. but im sure my carousel buttons dont work after messing with all that. 

ok the bootstarp is working and it sorta made my current css weard 
i made a logforms component but I am having trouble making it render on my page. 

im commenting it out got the moment. 

i set up a basic form for sign and passwords 
very basic right now. the form is simple but i havent seen it yet. I have some nav bar stuff in my app. I think i need to take that out as adding stuff to it has become difficult. 
i have reached out. 

right now the form is simple and really does nothing. 
i am going to add some state so i may copy the code here incase i mess it up. 
this is going to be so long...
just putting this here for now

const FormSignup = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Create your account by filling out the information below. </h1>
                <div className="forms-inputs">
                <label htmlFor="username" 
                className="form-label">
                    Username
               </label>

                <input type="text" 
                id="username"
                name="username"
                className="form-input"
                placeholder="Enter your username"
                />
                </div>

                <div className="forms-inputs">
                <label htmlFor="email" 
                className="form-label">
                    Email
                </label>
                <input type="email" 
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                />
                </div>

                <div className="forms-inputs">
                <label htmlFor="password" 
                className="form-label">
                    Password
                </label>
                <input type="password" 
                id="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                />
                </div>

                <div className="forms-inputs">
                <label htmlFor="password2" 
                className="form-label">
                    Password2
                </label>
                <input type="password2" 
                id="password2"
                name="email"
                className="form-input"
                placeholder="Enter your password2"
                />
                </div>

                <button className="form-input-btn"
                type="submit">
                    Sign up
                </button>
                <span className="form=input-login">
                    Already have an account? Login here
                    <a href="#"></a>
                </span>
                

            </form>
        </div>
        
    );
};

using a hook here. custom hook. keep state functions within this component and make it work!!! working is good

https://reactjs.org/docs/getting-started.html

new file for useForm.js

useEffect...
changing the value with serBalues and usine e (event) to target everything with 'name'

under const handleChange add another const 
destructuring name and value = to event .target...

going from
const handleChange = e => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }
}
tooo
const handleChange = e => {
        const{ name, value} = e.target
        setValues({
            ...values, 
            [name]: value
        })
    }
}
this...same i just used the constructer asking to target with the event name and value and then removed the 

a handleChange function was just created. I do have an error. It is about to be added to my useForm.js. that might fix the error.
the handls Change will update the values hopefuly adding that to all of the imputs. adding under place holder value=

errors...values and handleChange is not defined. 
but did lose the worning error

importing useForm on FormSignup
deconstruct values of this with const under constructor of FormSignup
const {handleChange, values} = useForm();

go back to add to return in useForm hook

1 error gone but formSignup not found

handleSubmision to prevent defaule refresh
const handleChange before the return 
needs added also to useForm in the return

back to formSignup and add this to form className onsubmit = handleSubmit

in const with the handlChange, values add handleSubmit 
still not submiting but can type and click button

how to show errors if imput is incorrect how to validate?
here is a val for username and password with 3 trys

https://www.formget.com/javascript-login-form/

getElementById with a disable by a function for validate

this html form with javescript validate
https://www.geeksforgeeks.org/form-validation-using-html-javascript/

validate.js..check the format and make sure it mattched. if (!.... .trim ) is to remove whitespaces


Bang!
Javascript, the exclamation mark (“!”) symbol, called a “bang,” is the logical “not” operator. Placed in front of a boolean value it will reverse the value, returning the opposite.

!true; // Returns false.
!false; // Returns true.

Determines the values associated true/false value.
Returns the opposite of the associated true/false value.

Reference for the logical “not” operator:

code for validating if its an email or not @
https://www.w3resource.com/javascript/form/email-validation.php

An email is a string (a subset of ASCII characters) separated into two parts by @ symbol. a "personal_info" and a domain, that is personal_info@domain. The length of the personal_info part may be up to 64 characters long and domain name may be up to 253 characters.

The personal_info part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens, and dots.
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
if is reconizing there is a value and else if it matching up to val that it is an email.
 the same for the rest. 
 add a return

 in FormSignup.js i still have an error for this for modual not found

add validate to useForm and the handle submit to the const
in useForms 
adding setErrors to validate values and adding errors to return
 
 defining validate by adding to const useForm function

    says   if there are errors here (&&) then do this

    useForm.js under handle submit create state for 
    const [isSubmitting, setIsSubmitting] = useState
    (false)
    false,its not subimitted yet

    under the const handleSubmit event function for prevent default inside the function 

    after validating errors put setIsSubmitting to true
    it dont look like its doing any thing if you fill it out. 

    form.js is to formSignup.js  as 
    index.js is to app.js 
 
     in form.js add the state pass back in is submitted...
     and the function to set submit to true
     before the return
     

     in formsignup destructure an pass in that function and pass in 
     use form as the submit for and use form value

     in form success you can add am image with this under return

     <div className="form-content-right">
            <div className="form-success">Request received</div>
            <img src "" alt=""
            className="form-imgage"/>
        </div>

        i dont dont have an image loaded in at this point
        folder made in public for images

        the form is submitting request but nothing has been added by the user. 


        in useForm  under handleSubmit add useEffict hook for displaying  errors if there are any and if there isnt its going to allow is to 
        submit thin. 
        
        useEffect
        if object.keys ...looking at errs .length if = to 0 then 0 errors
        then return isSubmiting then run call back function. 
        errors only triggers if there is an error

        when the signup button is hit now with nothing in it you will get the prompts to add needed info

        this will validate but it will not do anything else. 
        there is no back end this is just a starter. 

        it did not like my email validation...
        https://www.w3resource.com/javascript/form/email-validation.php

        i need help...i have reached out but really there is just noone with time. 

        ok wow...so i found a dev ed video series that is filling in the blankes a bit. i realise i am not set up right, i hope i have time to finish this. im missing a lot even after all this. it makes more sense now i should of watched this in the begining. cleared some stuff up. 
        
         i did find that in my lower Vs code bar i was in html. proble dont REaly matter but i changed that to JavaScript react. this should help me more. i have a ton of errors in my HTML page now but i will likely add thos things commented out here as it seams to make it angery. why not...this has been a jurnaling experience as well building this but anyway now my tab for divs and different stuff should work. 
         cool


         I am about to lose my home file now. i was about to do the glass in this to set up my page and do the final routing then try to fix broken stuff...i cant even get in it. says its been deleated. auto deleated. i am at my wits end. i have reached out to the people i been trying not to bothe but i have lost several files to this and i just really dont know why. I am getting warnings on my forms and i really cant lose them they took me so long. I get somewhere and this bug takes another file i have to rebuile. i am just really i just dont know. the only thing i found is where someone cut and pasted some code not realising it was an overwrite and it would not let them in but i have not done that. I have not set any fages. I am literly losing my files one at a time. I feel like i have buile everything atleast 2 times and i am out of time i cant keep doing this and if my form goes that was a 2 day build...i will be so not getting the deadline even with the extra time. this is so sad...


       I found this in my tree and made a change on it then saved. i think this fixed it for now. we will see. 

nop...wasent fixed. kep going back. I deleated it and made a new on. turns out it didnt have a lot of code in it, 

keep having errors over a webpack now it wond lode or let my css work i just get an error for waiting on a webpack
 Waiting for update signal from WDS...
 
 [HMR] Waiting for update signal from WDS...

Operating System: macOS
Node Version: v12.6.0
NPM Version: 6.9.0
webpack Version: 4.38.0
webpack-dev-server Version: 3.7.2
Browser: Chrome or Firefox
 This is a bug



i have not got my css to work this entire time. I have spent so much time trying to fix this. i found this so im going to try it. 

 npm install node-sass --save 
 Then rename all your .css files with .scss and your project with work properly.
 nop...


wow..Raini was here asking questions and I was trying to tell him how i wanted to use this glass look i found and im converting it to JS. I still had not been able to get it to work but after trying to show him something we accidently fixed it. ill take it!

Dads fav color is blue so we are going do the page in various shades of a sorta storm blue. it will go well with the earthtones of the pics from Utah as well. 
basically the glass look is created with the opasity, and linear-gradient. Im liking the storm blue. I should call dad an see how hes doing. 
He said hes board. 


the opasity is fun to play with and the circles let you see the opasity of the glass which has an added blur and really a gradient of the glass opasity pretty much. that was a neet trick. Im going to tweak the colors a bit so it flows better. 

i really dont like how the home and utah are stacked and nothing i have done will pull them apart. they were set up in ul thin li and i changed those to div's. i could use fragments. nothing has changed. i dont want utah in the nav bar any way but i dont know how to do all i want to do and im running out of time. 

ok i have my cards looking like cards but they still are not where i want them. but first i need ot get my button to my signup and my forms connecting and all good. 

useState hook

https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd


display flex-box instead of 
display flex
 moved the 3 under the header!









        import React, { Component } from 'react';
// import { Link, Route, useParams, useRouteMatch}from "react-router-dom";










class Home extends Component {
    render() {
        return(
        <div>
            <h2>Heading West</h2>
            <p>We are following dad across the country and see what we can find!</p>
        </div>
        );
    }
}

export default Home;















































 my Carousel

import { findRenderedComponentWithType } from 'react-dom/cjs/react-dom-test-utils.development';
//for carousel. do i need this



a different carousel...took out of my App.js 
from when i 1st started the project. just going to put it here for now

***************
// export default connect(mapStateToProps, mapDispatchToProps)(App)

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

****************













































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
