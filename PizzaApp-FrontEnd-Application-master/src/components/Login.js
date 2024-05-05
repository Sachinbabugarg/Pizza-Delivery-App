import axios from 'axios';
import { useState } from "react";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate,useLocation,Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { setLogin } from "../Actions/action";
import 'react-toastify/dist/ReactToastify.css';
import "./Form.css";


export default function Form() {
	const navigate = useNavigate();

  let dispatch = useDispatch();
  //States for registration
  //var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  //Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  var obj;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      console.log("error");
      toast.dark("empty credentials", {
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
      obj={"userEmail":email,
      "userPassword":password}
      try {
        const response = await axios.post(`http://localhost:8080/login`,{...obj});
        toast.dark("Login Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(setLogin(response.data.customerId,response.data));
        navigate("/BookOrder")
      } catch (error) {
        console.log(error.response.data.message);
        toast.dark(error.response.data.message, {
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

  return (
    <div className="maindiv">
        <div style={{marginTop:"4%"}} className="container">
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
                  <FaEnvelope style={{ margin: "5px" }} />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={handleEmail}
                required
              />
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
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={handleSubmit}
            >
              LOGIN
            </button>
            <div className="message">
              <div>
                <input type="checkbox" style={{ color: "#088F8F" }} /> Remember
                ME
              </div>
            <a href="#" onClick={()=>navigate("/register")}>Register here</a> 
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}