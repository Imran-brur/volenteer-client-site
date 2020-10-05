import React, { useEffect, useState } from 'react';
import './VolenteerList.css';
import deleteLogo from '../../logos/trash.png';
import logo1 from '../../logos/Group 1329.png';
import logo2 from '../../logos/plus 1.png';
import logo3 from '../../logos/users-alt 1.png'


const VolenteerList = () => {
    const [volenteerUser, setVolenteerUser] = useState([]);

    useEffect(() =>{
        fetch('https://mighty-mesa-51953.herokuapp.com/volenteers')
        .then(res => res.json())
        .then(data =>{
            setVolenteerUser(data);
        })
    }, [volenteerUser])

    const deleteVolenteer = (id) => {
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
        <div className="d-flex login-container">
            <div className="col-md-3">
            <div style={{padding: '30px'}}>
                <a href="/home"><img style={{width:'50%'}} src={logo1} alt=""/></a>
            </div>
            <a href="/volenteerList"><img style={{width:'15%'}} src={logo2} alt=""/>Volenteer Register List</a>
               <br/>
            <a href="/addEvent"><img style={{width:'15%'}} src={logo3} alt=""/> Add event</a>
            </div>
            <div style={{padding: '30px'}} className="col-md-9 list">
            <h1>Volenteer Register List</h1>
            <table>
            <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th style={{marginLeft: '60px'}}>Registration Date</th>
                <th>Activity</th>
                <th>Action</th>
            </tr>
            {
                volenteerUser.map(volenteer => 
                 
                        
                        <tr>
                            <td>{volenteer.name}</td>
                            <td>{volenteer.email}</td>
                            <td>{volenteer.registration.date}</td>
                            <td>{volenteer.registration.library}</td>
                            <td onClick={()=>{deleteVolenteer(`${volenteer._id}`)}}><img style={{width: '40px', marginRight: '60px'}} src={deleteLogo} alt=""/></td>
                        </tr>
                   
                    )
            }
         </table>
         </div>
        </div>
    );
};

export default VolenteerList;