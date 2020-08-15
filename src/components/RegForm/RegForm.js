import React, { Component } from 'react';
import styles from './regform.module.css'
class regForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email : '',
            password: ''
        };
    }

    onUsernameChange = (event) => {
        this.setState({username: event.target.value});        
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value});        
    }
    
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});        
    }

    onRegisterClick = (event) => {
        event.preventDefault();
        const { username, email, password } = this.state; 
        if(username.length > 0 && password.length > 0 && email.length > 0) {
            //do validation over here....(http request to our restAPI) then do the following
            fetch('http://localhost:5000/register',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    username : username,
                    password : password,
                    email : email,
                    routines : []
                })
            }).then(res => res.json())
            .then(data => {
                if (data.registered === true) {
                    this.props.authHandler(data.username);
                } else {
                    alert("Uername already exsit : please choose different username!");
                }
            })
            .catch(err => console.log(err));
        }        
    }

    render() {
        return ( 
            <div className={styles.FormContainer}>
                <form className={styles.FormBox} onSubmit={this.onRegisterClick}>
                    <h1 className={styles.FormHeader}>Register</h1>
                    <hr className={styles.FormHeaderLine}/>
                    <p><input className={styles.FormInput} onChange={this.onUsernameChange} value={this.state.username} type='text' id='username' placeholder='Username'/></p>
                    <p><input className={styles.FormInput} onChange={this.onEmailChange} value={this.state.email} type='email' id='email' placeholder='Email'/></p>
                    <p><input className={styles.FormInput} onChange={this.onPasswordChange} value={this.state.password} type='password' id='password' placeholder='Password'/></p>
                    <p><button className={styles.FormButton} type='submit'>Register</button></p>
                </form>
            </div> 
        );
    }
}
 
export default regForm;