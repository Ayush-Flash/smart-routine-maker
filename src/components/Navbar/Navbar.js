import React, { Component } from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                {
                    (!this.props.isUserSignedIn) ?
                        <nav className={styles.navbar}>
                            <ul className={styles.navlinks}>
                                <Link to='/' className={styles.navlink}>Login</Link>
                                <Link to='/register' className={styles.navlink}>Register</Link>
                            </ul>
                        </nav>
                    :
                    <nav className={styles.navbar}>
                        <ul className={styles.navlinks}>
                            <Link onClick={this.props.logOutHandler} to='/' className={styles.navlink}>Logout</Link>
                        </ul>
                    </nav>  
                }
            </div>
        )
    }
}
 
export default Navbar;