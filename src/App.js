import React from 'react';
import './styles/App.css';
import './styles/typography.css';
import Log from './components/Log';
import Feed from './components/Feed';
import BbqTips from './components/BbqTips';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TwitterFollowButton } from 'react-twitter-embed';

function App() {
  return (
    <div className="App">
      <div className="App-Title">
        <h1>MEAT DEVS</h1>
      </div>
      <Router>
        <div className="Router-Styling">
          <span className="App-Routes">
              <Link to="/">Home</Link>
          </span>
          <span className="App-Routes">
              <Link to="/feed/">Feed</Link>
          </span>
          <span className="App-Routes">
              <Link to="/log/">Log</Link>
          </span>
          <span className="App-Routes">
              <Link to="/bbqtips/">BBQ Tips</Link>
          </span>
          <span className="App-Routes">
              <Link to="/login_signup/">Login/Signup</Link>
          </span>
          <span className="App-Routes">
              <a href="https://mailchi.mp/7fd00f8f4f23/meatdevs">Newsletter</a>
          </span>
        </div>
        <div className="Twitter-Follow-Styling">
          <TwitterFollowButton
            screenName={'meatdevs'}
          />
        </div>    
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/feed/" component={Feed} />
          <Route path="/log/" component={Log} />
          <Route path="/bbqtips/" component={BbqTips} />
          <Route path="/login_signup/" component={LoginSignup} />
        </div>
      </Router>
    </div>
  );
}

export default App;