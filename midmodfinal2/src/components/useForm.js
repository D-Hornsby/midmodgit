
import {useState, useEffect} from 'react';

//2
//divining validate here

const useForm = (callback, validate) => {
//changing values with setValues
    const [values, setValues] = useState({
        username:'', 
        email:'',
        password:'',
        passwordv:''

    });
    const [errors, setErrors] = useState ({});
    const [isSubmitting, setIsSubmitting] = useState
    (false);
//using event to target everything with name here under handleChange setting values
//destructuring name and value ...value =  event .target
//handleChange will update the values adding that to all of the imputs adding under placeholder value=
//const handle change before the return. needs added in the return ...done
    const handleChange = e => {
        const{ name, value} = e.target;
        setValues({
            ...values, 
            [name]: value
        });
    };
//adding validate to useForm and handle submit. adding setErrors to validate values and
//add errors to return
//create statw for isSubmitting and setIsSubmitting = useState. 
//edit. false is not subimitted yet changed to true


const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
};

//useEffect...if there are errors here && do this 
//if object.keys..looking at errs.length if = to 0 then 0 errors
//then return isSubmitting run call back function
//useEffect hook for displaying errors if there is any 
//If no errors...
//******  will allow to submit here 
//errors only trigger is there is an error

useEffect(
    () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            // callback();
        }
    },
      [errors] //i tried a function to return errors here but it was unhappy
);


    //adding a return for the useForm hook. handleSubmit to prevent default refresh
    //add errors in return so if values are not validated errors are returned
    return {handleChange, values, handleSubmit, errors};
};

export default useForm;

//import use form to signup form
//when signup button is hit with noting in ti you will get the prompts to add needed info
//this will validate but there is no back end to this 