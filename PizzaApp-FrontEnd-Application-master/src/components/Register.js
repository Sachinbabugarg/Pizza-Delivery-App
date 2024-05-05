import axios from 'axios';
import "./Form.css";
import { useState } from "react";
import { FaUserCircle, FaEnvelope, } from "react-icons/fa";//MdOutlineDriveFileRenameOutline
import { FiLock } from "react-icons/fi";
import { SiNamecheap, SiChevrolet } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Form() {
  // States for registration
  var navigate = useNavigate();
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

 
  var obj
  // Handling the form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
      toast.dark("", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setSubmitted(true);
      setError(false);
       obj = {"customerName": name, "customerEmail": email, "password":password};
    
    try {
        const response = await axios.post(`http://localhost:8080/register`, { ...obj });
        toast.dark("Registration Successfull", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/login")
    }
    catch(err){
        console.log(err.response.data.message);
        toast.dark(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }
}
  };

  
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="maindiv">
       <div className="container">
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center">
            <FaUserCircle style={{ fontSize: "110px", color: "white" }} />
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <SiNamecheap style={{ margin: "5px" }} />
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Name" onChange={handleName} />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FaEnvelope style={{ margin: "5px" }} />
                </span>
              </div>
              <input type="email" className="form-control" placeholder="Email" onChange={handleEmail} />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FiLock style={{ margin: "5px" }} />
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={handlePassword}
              />
            </div>
            <button type="button" className="btn btn-secondary btn-block" onClick={handleSubmit}>
              REGISTER
            </button><br />
            <label style={{ color: '#088F8F' }}>Already have an Account</label>
            <div><a href="#" onClick={() => navigate("/login")} style={{width:'100%'}}>Login here</a></div>
          </form>

        </div>
      </div>
    </div>
      </div>
   
  );
}