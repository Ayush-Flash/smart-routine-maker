import React, { Component } from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <div className={styles.brandContainer}>
                    <img src={require('./brand.png')} alt='brand' className={styles.brand} />
                </div>
                <ul className={styles.navlinks}>
                    {Object.keys(this.props.mapping).map(route => <Link key={route} to={route} className={styles.navlink} onClick={(this.props.isUserSignedIn) ? this.props.logOutHandler : null}>{ this.props.mapping[route] }</Link>)}
                </ul>
            </nav>
        )
    }
}
 
export default Navbar;

