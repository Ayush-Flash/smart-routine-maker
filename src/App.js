import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import LoginForm from './components/LoginForm/LoginForm';
import RegForm from './components/RegForm/RegForm';
import Home from './components/Home/Home';
import { Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      isUserSignedIn: false
    }
  }

  authHandler = (username) => {
    this.setState({
      username : username,
      isUserSignedIn : true
    });
  }

  logOutHandler = () => {
    this.setState({
      username : '',
      isUserSignedIn : false
    });
  }

  render() {
    const mapping = (!this.state.isUserSignedIn) ? {'/': 'Login', '/register': 'Register'} : {'/': 'Logout'}; 
    return (
      <div className="App">
        <Navbar isUserSignedIn={this.state.isUserSignedIn} logOutHandler={this.logOutHandler} mapping={mapping}/>
          {
            (!this.state.isUserSignedIn) ? 
            <div>
              <Switch>
                <Route path='/register' exact component={() => <RegForm authHandler={this.authHandler}/>} />           
                <Route path='/' component={() => <LoginForm authHandler={this.authHandler}/>} />
              </Switch>
            </div> 
            : <div>
                <Route path='/' exact component={() => <LoginForm authHandler={this.authHandler}/>} />
                <Route path='/register' exact component={() => <RegForm authHandler={this.authHandler}/>} />           
                <Route path='/home' component={() => <Home username={this.state.username}/>} />
                <Redirect to='/home' />
              </div>
          }  
      </div>
    );
  }
}

export default App;
