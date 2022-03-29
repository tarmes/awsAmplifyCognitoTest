import './App.css';
import Shown from './Components/Shown'
import Hidden from './Components/Hidden'
import { Route, Routes, Link } from 'react-router-dom';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

// React UI component
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import React, { useState, useEffect } from 'react';

Amplify.configure(awsconfig);

function App() {

  const [ user, setUser ] = useState(null);
  // const [ customState, setCustomState ] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
  //     switch (event) {
  //       case 'signIn':
  //         setUser(data);
  //         break;
  //       case 'signOut':
  //         setUser(null);
  //         break;
  //       case 'customOAuthState':
  //         setCustomState(data)
  //     }
  //   });

  //   Auth.currentAuthenticatedUser()
  //     .then(currentUser => setUser(currentUser))
  //     .catch(() => console.log('Not signed in.'));

  //   return unsubscribe;
  // }, []);

  const goog = () => {
    window.location.href='https://productchanger453110d6-453110d6-dev.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=719vs0tnhd48t97o1ihet1ohok&redirect_uri=http://localhost:3000/private/'
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Shown user={user} /> } />
        <Route path='/private' element={ <Hidden /> } />
      </Routes>
        <button onClick={goog}>Open Google</button>
        {/* <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button> */}
        {/* <button onClick={() => Auth.signOut()}>Sign Out {user.getUsername()}</button> */}
    </div>
  );
}

export default withAuthenticator(App);
