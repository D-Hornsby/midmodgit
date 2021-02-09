import React, {useState} from 'react';
import FormSignup from './FormSignup';
import './Form.css';
import FormSuccess from './FormSuccess';


const Form = () => {
    const[isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    

    return (
    
            <>
              <div className="form-container">
                  <span className="close-btn">x</span>
                  <div className="form-content-left">
                      

                  </div>
                  {!isSubmitted? (<FormSignup submitForm={submitForm}/>
                   ) : (<FormSuccess/>)}
              </div>
                
                </>
    
    );
};

export default Form;


