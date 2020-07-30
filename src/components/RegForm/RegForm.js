import React from 'react';
import styles from './regform.module.css'
const regForm = () => {
    return ( 
        <div className={styles.FormContainer}>
            <form className={styles.FormBox}>
                <h1 className={styles.FormHeader}>Register</h1>
                <hr className={styles.FormHeaderLine}/>
                <p><input className={styles.FormInput} type='text' id='username' placeholder='Username'/></p>
                <p><input className={styles.FormInput} type='email' id='email' placeholder='Email'/></p>
                <p><input className={styles.FormInput} type='password' id='password' placeholder='Password'/></p>
                <p><button className={styles.FormButton}>Register</button></p>
            </form>
        </div> 
    );
}
 
export default regForm;