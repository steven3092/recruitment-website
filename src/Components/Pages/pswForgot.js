import React, { useCallback, useState, useContext  }  from 'react';
import firebaseConfig from '../../base';
import './SignIn.css';
import  { AuthContext }  from '../../Context/Auth';
import { withRouter, Redirect } from "react-router";


//If the password is forgotten you can send an email to your mail box to reset your password.
//This pages deals with that

const PswForgot = ({ history }) => {

    
  
   // const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

   
    const forgetpassword = useCallback(
        async event => {
          event.preventDefault();
          const { email } = event.target.elements;
          try {
            //Connection to the database
            await firebaseConfig
              .auth()
              .sendPasswordResetEmail(email.value)
             setError(null);
             setSuccess(`Consulter votre email ${email.value} pour changer le mot de passe`);
             setTimeout( () => {
             history.push("/SignIn");
            }, 5000)

          } catch (error) {
            setError(error);
          }
        },
        [history]
      );
    
      const { currentUser } = useContext(AuthContext);
    
      if (currentUser) {
        return <Redirect to="/SignIn" />;
      }
        
return (
<>

<form onSubmit={forgetpassword}>
          <div class="container">
              <h2>Password forgotten ?</h2>
              <br></br>
            <label for="email"><b>E-mail address</b></label>
            <input type="email"
             placeholder="E-mail" 
             name="email" 
             required
             />
        
        <button type="submit">OK</button>

</div>
</form>
{ success && <div style= {{padding : "2% 0"}}><span style= {{border:"10px solid green", background:"green", color:"#ffffff", margin: "0% 20% 0% 33.70%"}}>{success}</span></div>}

{ error && <div style= {{padding : "2% 0"}}><span style= {{border:"10px solid red", background:"red", color:"#ffffff", margin: "0% 20% 0% 32.10%"}}>{error.message}</span> </div>}

</>
);
};

export default withRouter(PswForgot);