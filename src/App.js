import './App.css';
import Shown from './Components/Shown'
import Hidden from './Components/Hidden'
import { Route, Routes } from 'react-router-dom';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

// React UI component
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(awsconfig);

function App({ signOut, user }) {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Shown user={user} /> } />
        <Route path='/private' element={ <Hidden /> } />
      </Routes>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);
