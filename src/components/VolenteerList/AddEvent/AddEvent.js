import React from 'react';
import logo1 from '../../../logos/Group 1329.png'
import logo2 from '../../../logos/plus 1.png';
import logo3 from '../../../logos/users-alt 1.png'

const AddEvent = () => {
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
            <div style={{padding: '30px', height: '400px'}} className="col-md-9 list">
                <p><b>Event Title</b><b style={{marginLeft: '350px'}}>Event Date</b></p>
                <input type="text" placeholder="Event title"/> &nbsp; &nbsp; &nbsp; &nbsp;
                <input type="date" />
                <p><b>Description</b></p>
                <input type="text" placeholder="Enter Description"/> <br/> <br/>
                <button class="btn btn-success float-right btn-lg">Submit</button>
            </div>
        </div>
    );
};

export default AddEvent;