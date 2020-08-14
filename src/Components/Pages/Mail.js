import React from 'react';
import axiosPostMail from '../../Context/axiosPostMail'
 class Mail extends React.Component {

  state = {
    email:'',
    name:'',
    message:'',
    success: null
  }
  
  handleSubmit = (e) =>{
    e.preventDefault();

    const Data = {
      email:this.state.email,
      name: this.state.name,
      message:this.state.message,
    }
    axiosPostMail.post('/Mail.json', Data)
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        this.setState({success : `Your email has been sent, your are going to receive an email confirmation`})
        this.setState({isError : null});
    } 
    })
   }
    

  render(){

    return (
      <>
     <div>
       <h1>Welcome to the Mail !!</h1>
     
     </div>

           
      <form onSubmit={this.handleSubmit}>
          <div class="container">
              <h2>Sending email</h2>
              <br></br>
            <label for="email"><b>E-mail address</b></label>
            <input type="email"
             placeholder="Email" 
             name="email"
             value = {this.state.email}
             onChange= {(e)=> this.setState({email:e.target.value})}
             required
             />
            <label for="name">Name</label>
            <input type="name"
             placeholder="Name" 
             name="name"
             value = {this.state.name}
             onChange= {(e)=> this.setState({name:e.target.value})}
             
             />
            <textarea id="Message" name="message" value= {this.state.message} onChange= {(e)=> this.setState({message:e.target.value})} rows="4" cols="63" required>
                    Write a message.
            </textarea>
        
            <button type="submit" onSubmit={this.handleSubmit}>Send</button>

          </div>
      </form>
      { this.state.success && <div style= {{padding : "2% 0"}}><span style= {{border:"10px solid green", background:"green", color:"#ffffff", margin: "0% 20% 0% 35.20%"}}>{this.state.success}</span></div>}
      
      </>

    );
  }
 }

export default Mail;
