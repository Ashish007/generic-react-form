import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form/Form';
import styles from './index.scss';
import ControlledForm from './components/ControlledForm/ControlledForm';
function Welcome () {
    return (<div style={{display:"flex", justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <ControlledForm />
    </div>);
}
ReactDOM.render(<Welcome />, document.getElementById("root"));
