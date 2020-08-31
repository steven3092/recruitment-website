import React, { Component } from 'react';
//import './Accueil.css';
import './SignIn.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';


class Information extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary :</h3>
        <br></br>
        <table>
          <tbody>
            <tr>
              <td>Name :   </td>
              <td>{name.value}</td>
            </tr>
            
            <tr>
              <td>Gender :   </td>
              <td>{gender.value}</td>
            </tr>
            
            <tr>
              <td>Age :   </td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
    


    Information.propTypes = {
      steps: PropTypes.object,
    };
    
    Information.defaultProps = {
      steps: undefined,
    };

const Home = () => {

  
  
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Gill Sans, sans-serif',
    headerBgColor: '#3396ff',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#3396ff',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };


  const config = {
    width: "300px",
    height: "400px",
    floating: true,
    headerTitle: 'Recruitment website BOT',
    enableSmoothScroll: true,
    hideSubmitButton: true,
    placeholder: 'Type your message ...'

    //recognitionEnable: true,
    //recognitionLang: 'en',
    //recognitionPlaceholder: 'Listenning'
  };

  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}! What is your gender?',
      trigger: 'gender',
    },
    {
      id: 'gender',
      options: [
        { value: 'male', label: 'Male', trigger: '5' },
        { value: 'female', label: 'Female', trigger: '5' },
      ],
    },
    {
      id: '5',
      message: 'How old are you?',
      trigger: 'age',
    },
    {
      id: 'age',
      user: true,
      trigger: '7',
      validator: (value) => {
        if (isNaN(value)) {
          return 'value must be a number';
        } else if (value < 0) {
          return 'value must be positive';
        } else if (value > 120) {
          return `${value}? Come on!`;
        }

        return true;
      },
    },
    {
      id: '7',
      message: 'Great! Check out your summary',
      trigger: 'Information',
    },
    {
      id: 'Information',
      component: <Information />,
      asMessage: true,
      trigger: 'update',
    },
    {
      id: 'update',
      message: 'Would you like to update some field?',
      trigger: 'update-question',
    },
    {
      id: 'update-question',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'update-yes' },
        { value: 'no', label: 'No', trigger: 'end-message' },
      ],
    },
    {
      id: 'update-yes',
      message: 'What field would you like to update?',
      trigger: 'update-fields',
    },
    {
      id: 'update-fields',
      options: [
        { value: 'name', label: 'Name', trigger: 'update-name' },
        { value: 'gender', label: 'Gender', trigger: 'update-gender' },
        { value: 'age', label: 'Age', trigger: 'update-age' },
      ],
    },
    {
      id: 'update-name',
      update: 'name',
      trigger: '7',
    },
    {
      id: 'update-gender',
      update: 'gender',
      trigger: '7',
    },
    {
      id: 'update-age',
      update: 'age',
      trigger: '7',
    },
    {
      id: 'end-message',
      message: 'Thanks! Your data was submitted successfully!',
      end: true,
    },
  ];

  

return (
<>

    <div>
      <h1>Welcome to Home !!</h1>
    </div>
    <br></br>
     <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config}/>
    </ThemeProvider>

    
  </>
    );
  }

  export default Home;
//https://lucasbassetti.com.br/react-simple-chatbot/#/docs/steps

























