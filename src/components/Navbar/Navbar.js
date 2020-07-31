import React from 'react';
import styles from './navbar.module.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import LoginForm from '../LoginForm/LoginForm';
import RegForm from '../RegForm/RegForm';
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navlinks}>
                <div>
                    <Link to='/' className={styles.navlink}>Login</Link>
                    <Link to='/register' className={styles.navlink}>Register</Link>
                </div>         
            </ul>
            <Switch>
                <Route path='/login/home' exact component={Home} />
                <Route path='/register' exact component={RegForm} />
                <Route path='/' component={LoginForm} />
            </Switch>
        </nav>
    );
}
 
export default Navbar;