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
      isUserSignedIn: false
    }
  }

  logInHandler = () => {
    this.setState({isUserSignedIn : true});
  }

  logOutHandler = () => {
    this.setState({isUserSignedIn : false});
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
                <Route path='/register' exact component={RegForm} />           
                <Route path='/' component={() => <LoginForm logInHandler={this.logInHandler}/>} />
              </Switch>
            </div> 
            : <div>
                <Route path='/home' component={Home} />
                <Redirect to='/home' />
              </div>
          }  
      </div>
    );
  }
}

export default App;
