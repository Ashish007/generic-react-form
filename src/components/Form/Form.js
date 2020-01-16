import React from 'react';
// import ReactDOM from 'react-dom';
import styles from './Form.scss';

export default function Form() {
    return (<div className={styles.container}>
        <div className={styles.container__heading}>
            <h2>My React Form</h2>
        </div>
        <div>
            <form>
                <label for="name">Name : </label>
                <input id="name" style={{ padding: '5px', borderRadius: '5px', border: "1px solid #999", marginTop: '5px', marginBottom: '10px' }} type="text" placeholder="Enter name" />
                <label for="password">Password : </label>
                <input id="password" style={{ padding: '5px', borderRadius: '5px', border: "1px solid #999", marginTop: '5px', marginBottom: '10px' }} type="password" placeholder="Enter password" />
                <label for="mobilenumber">Mobile Number : </label>
                <input id="mobilenumber" style={{ padding: '5px', borderRadius: '5px', border: "1px solid #999", marginTop: '5px', marginBottom: '10px' }} type="text" placeholder="Enter mobile number" />
                {/* <div style={{display:'flex', justifyContent:'çenter'}}>
                    <button>Submit</button>
                </div> */}
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>);
}
