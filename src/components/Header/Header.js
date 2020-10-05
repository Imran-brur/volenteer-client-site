import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import './Header.css'

const Header = () => {
    return (
       <div>
            <nav class="navbar navbar-expand-lg navbar-light">
            <a href="/home"><img src={logo} alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Donation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <Link to='/login'><button class="btn btn-primary btn-lg my-2 my-sm-0 button" type="submit">Log In</button></Link>
            <Link to='/volenteerList'><button class="btn btn-dark btn-lg my-2 my-sm-0 button" type="submit">Admin</button></Link>
          </form>
        </div>
      </nav>
       </div>
    );
};

export default Header;