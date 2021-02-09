import React from 'react';
import useForm from './useForm';
import validate from './validate';
import './Form.css';

const FormSignup = () => {

    const {handleChange, values, handleSubmit, errors} = useForm(validate);

    return (
        <div className="form-content-right">

            <form className="form" onSubmit= {handleSubmit}>
                <h1>Create your account by filling out the information below. </h1>
                <div className="forms-inputs">
                <label className="form-label">
                    Username
               </label>

                <input type="text" 
                
                name="username"
                className="form-input"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
                />

                {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="forms-inputs">
                <label className="form-label">
                    Email
                </label>
                <input type="email" 
                
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="forms-inputs">
                <label className="form-label">
                    Password
                </label>

                <input type="password" 
                
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
                </div>

                <div className="forms-inputs">
                <label className="form-label">
                    Confirm Password
                </label>
                <input type="passwordv" 
                
                name="passwordv"
                className="form-input"
                placeholder="Enter your password"
                value={values.passwordv}
                onChange={handleChange}
                />
                {errors.passwordv && <p>{errors.passwordv}</p>}
                </div>

                <button className="form-input-btn"
                type="submit">
                    Sign up
                </button>

                <button className="form-input-login"
                type="login">
                    Already have an account? 
                    
                </button>
                

            </form>
        </div>
        
    );
};

export default FormSignup;

