import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter, Redirect } from "react-router";
import './SignIn.css';  
import  { AuthContext }  from '../../Context/Auth';
import firebaseConfig from '../../base';

//This page allows the user to sign in ti his account

const SignIn = ({ history }) => {

     const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        //Connection to the database
        await firebaseConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
         history.push("/MySpace");
          
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
    //If it works you go to your space
  if (currentUser) {
    return <Redirect to="/MySpace" />;
  }
  
  return (
       <>
          <form onSubmit={handleLogin}>
          <div class="container">
            <label for="email"><b>E-mail address :</b></label>
            <input type="email"
             placeholder="E-mail" 
             name="email" 
             required
             
             />
        
            <label for="psw"><b>Password :</b></label>
            <input type="password"
              placeholder="Mot de passe" 
              name="password" 
              required
              />
           
            
            <button type="submit" >OK</button>
            
            <label>
              <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>

            <span class="SignUp">
              <a href="#SignUp" >
        			<Link to="/SignUp">Create an account</Link>
			      	</a>
            </span>
          </div>
         
          <div class="container" >
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">
               <a href="pswForgot">
                 <Link to="pswForgot">Password forgotten?</Link>
                </a>
              </span>
          </div>
          
        </form>  
            
          
         
        </>
         );
    };
 

export default withRouter(SignIn);




/*
<div class="modal-error">
<div class="modal-content">
    <span class="close" onClick={this.setState({ showModal: false})}>&times;</span>
    </div>
        </div>*/



         /*
        { this.state.isError && 
       
          console.log("zuifZFH"),
         <ReactModal
         isOpen={this.state.showModal}
         onRequestClose={this.handleCloseModal}
         >
    
          <div class="modal-error">
           <div class="modal-content">
          <span class="close" onClick={this.handleCloseModal}>&times;</span>
          <p>L'adresse mail ou le mot de passe est incorrect.</p>
            </div>
           </div>

           </ReactModal>
         
         
        }   */




/////**************************Connection BBD en Class react et en Hook  avec Axios********************************* */

/*
class SignIn extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
      name: '',
      psd: '',
      isError : false,
      isLoggedIn : false,
      showModal: false,
     // refresh : false,
    }

    this.handleOpenModal  = this.handleOpenModal.bind(this);
    this.handleCloseModal  = this.handleCloseModal.bind(this);
    //this.refreshPage();
  } 


      
   refreshPage() {
    window.location.reload({refresh : true});
  }
  
    handleOpenModal () {
     this.setState({ showModal: true });
    }

  
    handleCloseModal () {
        this.setState({ showModal: false });
    }

   



    handleChangeName = event => {
      this.setState({ name: event.target.value });
    }

    
    handleChangePsd = event => {
        this.setState({ psd: event.target.value });
      }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const userName = {
        name: this.state.name
      };
  
      const password = {
        psd: this.state.psd
      };

      const isError = {
        isError : this.state.isError
      }

      const isLoggedIn = {
        isLoggedIn : this.state.isLoggedIn
          
      }

     
      axios.post("https://bdd-recruitement-website.firebaseio.com/bdd-recruitement-website/AdresseMail", { userName, password })
        .then(result => {
          console.log(result);
          console.log(result.data);

          if (result.status === 200) {
            useAuth(result.data);
            this.setState({isLoggedIn : true});
        } else{
            this.setState({isError : true});
        }
        })
        .catch(e => {
            this.setState({isError : true});
        });
    }
  


  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }
*/
