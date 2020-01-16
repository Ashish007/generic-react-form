import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ControlledForm.scss';
export default class ControlledForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            userId: '',
            password: '',
            mobileNumber: '',
            gender: '',
            emailId: '',
            valid: false,
            error: { email: '', password: '' },
            isTouched: { email: false, password: false },
        }
    }
    submitForm = () => {
        console.log('submitForm');
    }
    updateEmailIdValue = (event) => {
        let val = event.target.value;
        this.setState((prevState, props) => { return { emailId: val } });
    }
    updatePassword = (event) => {
        let val = event.target.value;
        this.setState((prevState, props) => ({ password: val }));
    }
    validate(emailId, password) {
        let error = { email: '', password: '', isValid: true };
        if (emailId.length < 6) {
            error.email = "Min Length is 7"
        }
        return error;
    }
    checkFocus = (event) => {
        if (event.target.id == "emailId")
            this.setState((prevState, props) => {return {isTouched : {}}});
        if (event.target.id == "password")
            this.setState({ isTouched: { email: true, password: false } });
    }
    render() {
        const { emailId, password, error, focus } = this.state;
        const isEnabled = (emailId.length > 0 && password.length > 0);
        const errorMsg = this.validate(emailId, password);
        return <div style={{ flexDirection: 'column', padding: '50px', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 20px #222d48', borderRadius: '5px' }}>
            <div>
                <h2>My React Form</h2>
            </div>
            <form onSubmit={this.submitForm}>
                <label htmlFor="emailId">EmailId: </label>
                <input onBlur={this.checkFocus} className={focus && errorMsg.isValid ? styles.error : ""} style={{ padding: '5px', marginBottom: '10px' }} onChange={this.updateEmailIdValue} id="emailId" type="email" value={this.state.emailId} placeholder="Enter email-id" />
                <p>{focus && errorMsg.email}</p>
                <label htmlFor="password">Password: </label>
                <input className={errorMsg.isValid ? "" : styles.error} style={{ padding: '5px', marginBottom: '10px' }} onChange={this.updatePassword} id="password" type="password" value={this.state.password} placeholder="Enter Password" />
                <button disabled={!isEnabled}>Submit</button>
            </form>
        </div>
    }
}