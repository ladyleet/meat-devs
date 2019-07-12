import React from 'react';
import './App.css';
import Log from './Log';
import Feed from './Feed';
import BbqTips from './BbqTips';
import Home from './Home';
import LoginSignup from './LoginSignup';
import Protected from './Protected';
import { Router, Link } from '@reach/router'; 
import { TwitterFollowButton } from 'react-twitter-embed';
import Amplify, { Analytics } from 'aws-amplify';
import awsConfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsConfig);
Analytics.record({ name: 'test' });

function App() {
  return (
    <>  
      <div className="App">
      <div className="Router-Styling">
        <Link to="/" className="App-Routes">Home</Link>
        <Link to="/feed/" className="App-Routes">Feed</Link>
        <Link to="/log/" className="App-Routes">Log</Link>
        <Link to="/bbqtips/" className="App-Routes">BBQ Tips</Link>
        <Link to="/login_signup/" className="App-Routes">Login/Signup</Link>
        <Link to="/members/" className="App-Routes">Members</Link>
        <a href="https://mailchi.mp/7fd00f8f4f23/meatdevs" className="App-Routes">Newsletter</a>
      </div>
      <div className="App-Title">
        MEAT DEVS
      </div>
      <Router>
        <Home path="/" />
        <Feed path="/feed/" />
        <Log path="/log/" />
        <Protected path="/members"/>
      </Router>
      </div>
    </>
  );
}

export default App;