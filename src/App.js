import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
    return (
      <>
        <h1>Firebase AuthN</h1>
        <div className="header">Status</div>
        <SignIn />
        <SignUp />
      </>
    );
}

export default App