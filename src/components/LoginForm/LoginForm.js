import React from 'react';
import styles from './loginform.module.css'
const loginForm = () => {
    return ( 
        <div className={styles.FormContainer}>
            <form className={styles.FormBox}>
                <h1 className={styles.FormHeader}>Login</h1>
                <hr className={styles.FormHeaderLine}/>
                <p><input className={styles.FormInput} type='text' id='username' placeholder='Username'/></p>
                <p><input className={styles.FormInput} type='password' id='password' placeholder='Password'/></p>
                <p><button className={styles.FormButton}>Login</button></p>
            </form>
        </div> 
    );
}
 
export default loginForm;