import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Context/Auth';
//import { Provider as AlertProvider } from 'react-alert'
//import AlertTemplate from 'react-alert-template-basic'

import History from './Components/Pages/History';
import Notfound from './Components/Pages/notFound';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Sectors from './Components/Pages/Sectors';
import Clients from './Components/Pages/Clients';
import NavBar from './Components/NavBar/NavBar';
import Seniors from './Components/Pages/Seniors';
import Juniors from './Components/Pages/Juniors';
import Mail from './Components/Pages/Mail';
import MySpace from './Components/Pages/MySpace';
import PrivateRoute from './PrivateRoute';
import pswForgot from './Components/Pages/pswForgot';
import Home from './Components/Pages/Home';
import Appointment from './Components/Pages/Appointment';

//All our routes in the app to navigate between them

function Routes() {



    return (

        <AuthProvider >
            <Router>
                <div>
                    <NavBar />
                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route path="/History" component={History} />
                        <Route path="/Sectors" component={Sectors} />
                        <Route path="/Clients" component={Clients} />
                        <Route path="/Juniors" component={Juniors} />
                        <Route path="/Seniors" component={Seniors} />
                        <Route path="/Appointment" component={Appointment} />
                        <Route path="/Mail" component={Mail} />
                        <Route path="/SignIn" component={SignIn} />
                        <Route path="/SignUp" component={SignUp} />
                        <Route path="/pswForgot" component={pswForgot} />
                        <PrivateRoute path="/MySpace" component={MySpace} />
                        <Route component={Notfound} />


                    </Switch>
                </div>
            </Router>
        </AuthProvider>

    );
}

export default Routes;