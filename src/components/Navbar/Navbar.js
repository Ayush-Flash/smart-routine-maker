import React from 'react';
import styles from './navbar.module.css';
import { Route, Link, Switch } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import RegForm from '../RegForm/RegForm';
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navlinks}>
                <Link to='/' className={styles.navlink}>Login</Link>
                <Link to='/register' className={styles.navlink}>Register</Link>
            </ul>
            <Switch>
                <Route path='/register' exact component={RegForm} />
                <Route path='/' component={LoginForm} />
            </Switch>
        </nav>
    );
}
 
export default Navbar;