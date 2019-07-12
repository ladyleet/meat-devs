import React from 'react';
import { Router, Link } from '@reach/router';
import { Auth, Analytics } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
function Protected() {
    
    const logout = () => {Auth.signOut()};
    const analytics = () => {Analytics.record({name: "tracy"})};

    return <>
    <button id="logout" onClick={logout}>Logout</button>
    <button onClick={analytics}>Analytics</button>
    </>;
}
export default withAuthenticator(Protected);