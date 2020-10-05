import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseConfig/firebaseConfig';
import logo from '../../logos/google.png';
import './Login.css';
import logo1 from '../../logos/Group 1329.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);

}

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            console.log(result.user);
            const signedInUser = {name: displayName, email: email}
           setLoggedInUser(signedInUser)
           history.replace(from);
          }).catch(function(error) {
            
          });
    }


    return (
        <div className="login-container App">
            <div>
                <img style={{width:'30%'}} src={logo1} alt=""/>
            </div>
            <div className="login">
                <h4>Login with</h4>
                <button className="social-button" onClick={handleGoogleSignIn}>
                <img style={{height: "25px", width: "25px", marginRight:"100px"}} src={logo} alt=""/> Continue With google</button>  
                <p>Don't' have an account?<a style={{color: 'blue', borderBottom: '2px solid blue', cursor: 'pointer'}} href="/login">Create an account</a></p>      
            </div>
        </div>
    );
};

export default LogIn;