import React, { useCallback } from 'react';
import './SignUp.css';
import {  Link } from 'react-router-dom';
import { withRouter } from "react-router";
import firebaseConfig from '../../base';

//This pages is used to create an account and be registered in the database

    const SignUp = ({ history }) => {
      const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          //Connection to the database
          await firebaseConfig
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/MySpace");
        } catch (error) {
          alert(error);
        }
      }, [history]);
    

    return (
        <form onSubmit={handleSignUp}>
        <div class="container">
            <div class = "registration">
          <h1>Register</h1>
          <p>Fill in the blanks to create an account</p>
          </div>
      
          <label for="email"><b>E-mail address</b></label>
          <input type="email" placeholder="E-mail" name="email" id="email" required/>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Password" name="psw" id="psw" required/>
      
          <label for="psw-repeat"><b>Repeat password</b></label>
          <input type="password" placeholder="Password" name="password" id="psw-repeat" required/>
          
      
          <p>Creating this account you validate <a href="#Terms">Terms & Privacy</a>.</p>
          <button type="submit" class="registerbtn">Register</button>
        </div>
      
        <div class="container signin">
          <p>You already have an acoount? <a href="#Sign">
       				 <Link to="/SignIn">Sign in</Link></a>.</p>
        </div>
      </form> 
    );
  }


export default withRouter(SignUp);





/*


import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);

*/