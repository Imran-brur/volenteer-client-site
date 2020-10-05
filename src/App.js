import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  LinK
} from "react-router-dom";
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import RegisterWork from './components/RegisterWork/RegisterWork';
import NotFound from './components/NotFound/NotFound';
import VolenteerList from './components/VolenteerList/VolenteerList';
import AddEvent from './components/VolenteerList/AddEvent/AddEvent';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
   <div>
      <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <PrivetRoute path='/register/:id'>
            <Register></Register>
          </PrivetRoute>
          <Route path='/registerWork'>
            <RegisterWork></RegisterWork>
          </Route>
           <Route path='/volenteerList'>
          <VolenteerList></VolenteerList>
        </Route>
        <Route path='/addEvent'>
          <AddEvent></AddEvent>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
        </Switch>

       
       
      </Router>
      
   
    </UserContext.Provider>

    
   </div>
  
     
      
  );
}

export default App;
