//found function to falidate my values of each imput 
//set up with warnings that pop up for each
//having issues with getting my email to validate ...Jade helped me fix this. I did not have the .test and 
//he found a working validation code

export default function validate(values) {
    let errors= {};

//trim is to remove white spaces 
// is username or not if not return username required error
    if(!values.username.trim()){
        errors.username= 'Username required'
    };


    if(!values.email){
        errors.email = 'Email required'
//using the bang "not operator" is email or not, to check format and make sure it matched if not email is invalid
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
       errors.email = 'Email address is invalid' 
    };

//is password or not if not return error
    if(!values.password){
        errors.password = 'Password is required'
    }else if (values.password.length < 7 ){
        errors.password= 'Password needs to be 7 characters or more'
    };

//does password validation match password or 'not' if not return error
    if (!values.passwordv){
        errors.passwordv = 'Password is required'
    
    }else if (values.passwordv !== values.password){
        errors.passwordv = 'Passwords do not match'
    };
    return errors;
};
