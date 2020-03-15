import React from 'react';
import {auth, createUserProfileDocument} from './firebase/firebase-utils';

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {username, email, password, confirmPassword} = this.state
        if(password !== confirmPassword) {
            alert("Passwords dont match")
        }
        try {
            const {user} = auth.createUserWithEmailAndPassword(
                email, password
            )
            console.log({user})
            createUserProfileDocument(user, {username})
            this.setState({
              username: "",
              email: "",
              password: "",
              confirmPassword: ""
            });
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
          <div>
            <h2>Sign Up</h2>
            <form className="signup" onSubmit={this.handleSubmit}>
              Name:
              <input
                type="text"
                name= "username"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <br />
              Email:{" "}
              <input
                type="email"
                name= "email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <br />
              Password:{" "}
              <input
                type="password"
                name= "password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <br />
              Confirm Password:{" "}
              <input
                type="password"
                name= "confirmPassword"
                onChange={this.handleChange}
                value={this.state.confirmPassword}
              />
              <br />
              <button>Sign Up</button>
            </form>
          </div>
        );
    }
}

export default SignUp