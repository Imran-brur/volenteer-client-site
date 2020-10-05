import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../fakeData/fakeData';
import logo1 from '../../logos/Group 1329.png';
import './Register.css';

const Register = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {handleSubmit, register, errors} = useForm();
    const {id} = useParams();
    const volenteerWork = fakeData.find(data => data.id === id);
    const {title} = volenteerWork;

    const onSubmit = data => {
        console.log(data)
        const registrationDetails = { ...loggedInUser, works: volenteerWork, registration: data, regTime: new Date()}
        
        fetch('https://mighty-mesa-51953.herokuapp.com/addRegister', {
           method: 'POST',
           headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(registrationDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Your registration complete successfully")
            }
        })
        history.push(`/registerWork`)
    }

    return (
       <div className="login-container App">
            <div>
                <img style={{width:'30%'}} src={logo1} alt=""/>
            </div>
            <form className="register" onSubmit={handleSubmit(onSubmit)}>
                <h3>Register as a Volunteer</h3>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name"/>
                {errors.name && <span className="error">This name is required</span>}
                <br/>   
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email"/>
                {errors.email && <span className="error">This email is required</span>}
                <br/>
                <input name="date" type="date" ref={register({ required: true })} placeholder="Date"/>
                {errors.address && <span className="error">This address is required</span>}
                <br/>
                <input name="description" ref={register({ required: true })} placeholder="description"/>
                {errors.phone && <span className="error">This phone is required</span>}
                <br/>            
                <input name="library" defaultValue={title} ref={register({ required: true })} placeholder="Organize books at the Library"/>
                {errors.phone && <span className="error">This phone is required</span>}
                <br/>
                <button class="reg btn btn-primary"type="submit">Registration</button>
            </form>
       </div>
    );
};

export default Register;