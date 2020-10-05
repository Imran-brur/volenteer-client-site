import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {

    return (
        <div className="home">
            <div>
            <Header></Header>
            <div>
                <h1 style={{textAlign: 'center', margin: '10px'}}>I GROW HELPING PEOPLE IN DEED</h1>
                <form class="form-inline justify-content-center">
                        <input style={{width:'400px'}} class="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-primary my-2 my-sm-0 button" type="submit">Search</button>
                </form>
            </div>
        </div>
        <div className="home-container">
            {
                fakeData.map(data => 
                  <Link to={`/register/${data.id}`}>
                        <div class="card" style={{width: '14rem'}}>
                        <img src={data.photo} class="card-img-top" alt="..."></img>
                        <h5>{data.title}</h5>                     
                    </div>
                  </Link>
                )
            }
        </div>
        </div>
    );
};

export default Home;