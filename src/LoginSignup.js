import React from 'react';

function LoginSignup() {
    return <>
        <h2>Login or Signup</h2>
        <form action="">
            <label for="email">Email</label><input id="email" type="email"/>
            <br/>
            <label for="password">Create a Password</label><input id="password" type="password"/>
            <br/>
            <input id="checkbox" type="checkbox"/> <label for="checkbox">this is my checkbox</label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    </>;
}

export default LoginSignup;