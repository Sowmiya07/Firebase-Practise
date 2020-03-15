import React from 'react';
import { auth, signInWithGoogle } from './firebase/firebase-utils';

class SignIn extends React.Component {
    constructor() {
       super()
       this.state = {
           email: '',
           password: ''
       } 
    }

    handleChange =(event) => {
        event.preventDefault()
        const {name, value} =  event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const {email, password} =  this.state
        console.log(email, password)
        try {
            auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password: ''})
        } catch( error) {
            console.log(error)
        }
    }

    render() {
        return (
          <div>
            <h2>Sign In</h2>
            <form className="signin" onSubmit={this.handleSubmit}>
              Name: <input type="email" onChange={this.handleChange} value={this.state.email} name="email"/> <br />
              Password: <input type="password" onChange={this.handleChange} value={this.state.password} name="password" /> <br />
              <button>Sign In</button>
              <button onClick={signInWithGoogle}>Sign In with Google</button>
            </form>
          </div>
        );
    }
}

export default SignIn