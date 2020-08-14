import React from 'react';
/*import { Button } from "../components/AuthForms";*/

import firebaseConfig from '../../base';

const MySpace = () => {

    return (
    <form>
   <div>
    <h1>Welcome to the MySpace !!</h1>

  
    <button onClick={() => firebaseConfig.auth().signOut()}>Log Out</button>
    </div>
    
    </form>
    );
};

    

export default MySpace;

