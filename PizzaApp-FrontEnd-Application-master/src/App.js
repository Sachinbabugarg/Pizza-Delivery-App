import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Pizza from './components/Pizza';
import PizzaOrder from './components/PizzaOrder';
import BookOrder from './components/BookOrder';
import Nav from './layout/Nav';
import ViewAllPizzaOrder from './components/ViewAllPizzaOrder';
import Dashboard from './components/Dashboard';
import Coupan from './components/Coupan';
import ViewCoupan from './components/ViewCoupan';


function App() {
  return (
    <Router>
      <nav>
        <Nav/>
        </nav>
        
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/pizzamgmt" element={<Pizza/>}/>
      <Route path="/vieworder" element={<PizzaOrder/>}/>
      <Route path="/BookOrder" element={<BookOrder/>}/>
      <Route path="/ViewAllPizzaOrder" element={<ViewAllPizzaOrder/>}/>
      <Route path="/Coupan" element= {<Coupan/>}/>
      <Route path="/ViewCoupan" element= {<ViewCoupan/>}/>
      </Routes>
    </Router>
  );
}

export default App;
