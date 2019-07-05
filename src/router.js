import React from 'react';
import Log from './Log';
import Feed from './Feed';
import BbqTips from './BbqTips';
import Home from './Home';
import LoginSignup from './LoginSignup';
import Newsletter from './Newsletter';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feed/">Feed</Link>
            </li>
            <li>
              <Link to="/log/">Log</Link>
            </li>
            <li>
              <Link to="/bbqtips/">BBQ Tips</Link>
            </li>
            <li>
              <Link to="/login_signup/">Login/Signup</Link>
            </li>
            <li>
              <Link to="/newsletter/">Newsletter</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/feed/" component={Feed} />
        <Route path="/log/" component={Log} />
        <Route path="/bbqtips/" component={BbqTips} />
        <Route path="/login_signup/" component={LoginSignup} />
        <Route path="/newsletter/" component={Newsletter} />
      </div>
    </Router>
  );
}

export default AppRouter;