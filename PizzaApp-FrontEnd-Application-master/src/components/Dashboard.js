import React from 'react';
import './Dashboard.css';
import {NavLink} from 'react-router-dom';


const Dashboard = () => {
  return (

    <div className="dashboard">

    <div className="updiv">
      <NavLink to="/login"><button className='loginbtn'>Login</button></NavLink>
      <p className='dashtext'>Please Login To Continue</p>
    </div>
    <img className="d-block w-100" src="./Images/pizza 3.jpg" alt="Image One"/>

	</div>
	)
}


export default Dashboard