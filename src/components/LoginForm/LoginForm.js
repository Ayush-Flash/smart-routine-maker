import React, { Component } from 'react';
import styles from './loginform.module.css';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }

    onUsernameChange = (event) => {
        this.setState({username: event.target.value});        
    }
    
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});        
    }

    onLoginClick = (event) => {
        event.preventDefault();
        const { username, password } = this.state; 
        if(username.length > 0 && password.length > 0) {
            //do validation over here....(http request to our restAPI) then do the following
            fetch('https://radiant-mountain-06539.herokuapp.com/login',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    username : username,
                    password : password
                })
            }).then(res => res.json())
            .then(data => {
                if (data.auth === true) {
                    this.props.authHandler(data.username);
                } else {
                    alert("Authentication Failed : Wrong login/password");
                }
            })
            .catch(err => console.log(err));
        }        
    }
    
    render() {
        return (
            <div>
                <div className={styles.FormContainer}>
                    <form className={styles.FormBox} onSubmit={this.onLoginClick}>
                        <h1 className={styles.FormHeader}>Login</h1>
                        <hr className={styles.FormHeaderLine}/>
                        <p><input className={styles.FormInput} onChange={this.onUsernameChange} value={this.state.username} type='text' id='username' placeholder='Username'/></p>
                        <p><input className={styles.FormInput} onChange={this.onPasswordChange} value={this.state.password} type='password' id='password' placeholder='Password'/></p>
                        <p><button className={styles.FormButton} type='submit'>Login</button></p>
                    </form>
                </div> 
            </div>
        );
    }
}
 
export default LoginForm;