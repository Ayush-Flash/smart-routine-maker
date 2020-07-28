import React from 'react';
import styles from './navbar.module.css';
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navlinks}>
                <li className={styles.navlink}>Login</li>
                <li className={styles.navlink}>Register</li>
            </ul>
        </nav>
    );
}
 
export default Navbar;