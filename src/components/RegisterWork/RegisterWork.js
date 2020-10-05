import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './RegisterWork.css';
import logo from '../../logos/Group 1329.png';
import { UserContext } from '../../App';



const RegisterWork = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [user, setUser] = useState([])

    useEffect(() =>{
        fetch('https://mighty-mesa-51953.herokuapp.com/volenteerWork')
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
    },[user])

    const deleteWork = (id) => {
        console.log(id)
        fetch(`https://mighty-mesa-51953.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then( res => res.json())
        .then(result => {
            if(result){
                console.log(result);
            }
        })
    }

    return (
       <div className="work-container">
          <Header></Header>
            <div className="container-style">
            {
                user.map(user =>
                <div>
                        <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-5">
                                <img src={user.works.photo} style={{width: '65%'}} alt="..."></img>
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h3>{user.works.title}</h3>
                                    <h4>{user.registration.date}</h4>
                                    <button className="btn btn-danger float-right deleteBtn" onClick={()=>{deleteWork(`${user._id}`)}}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    )
            }
            </div>
       </div>
    );
};

export default RegisterWork;