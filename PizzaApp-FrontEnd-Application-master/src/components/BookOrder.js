import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Popup from "reactjs-popup";
import "./BookOrder.css";
import { useSelector } from "react-redux";
import { async } from "q";

const BookOrder = () => {
  const [pizzas, setPizzas] = useState([]);
  const [order, setOrder] = useState({
    pizza_id: "",
    coupon_id: "",
    quantity: "",
  });

  const temp = useSelector((state) => state);
  var cusId = temp.id;

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  let q;
  const submit = async (e) => {
    e.preventDefault();
    const pizzaData = {
      pizza_id: order.pizza_id,
      coupon_id: order.coupon_id,
      quantity: order.quantity,
    };
    q = pizzaData.quantity;
    console.log(pizzaData.pizza_id);
    console.log(cusId);
    console.log(q);
    if (
      pizzaData.pizza_id === "" ||
      pizzaData.coupon_id === "" ||
      pizzaData.quantity === ""
    ) {
      toast.dark("All fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      try {
        const res = await axios.post(`http://localhost:8080/bookPizzaOrder/${cusId}/${pizzaData.pizza_id}/${pizzaData.coupon_id}`,{"quantity": q });
        console.log(res);
        toast.dark(res.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
         alert("no data added");
      }
    }
  };

  const viewPizza = async (e) => {
    const res = await fetch(`http://localhost:8080/viewPizza`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      window.alert("Error: Data Not Fetch");
      console.log("Data Not Fetch");
    } else {
      setPizzas(data);
      // window.alert("Data Fetch Successfully");
      console.log("1" + pizzas);
    }
  };

  useEffect(() => {
    viewPizza();
  }, []);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-center" id="orderheader">
        Order Pizza
      </h1>
      <Popup
        trigger={
          <button className="btn btn-outline-primary mx-5 orderbtn">
            Order Now
          </button>
        }
        position="right center"
      >
        <div className="popup">
          <h2>Book Pizza Order</h2>
          <form onSubmit={submit} className="bookpizzaform">
            <div>
              <label>Pizza Id</label>
              <input
                name="pizza_id"
                onChange={handleChange}
                value={order.pizza_id}
                type="text"
                className="form-control"
                placeholder="Enter Pizza Id"
              />
            </div>
            <div>
              <label htmlFor="couponId">Coupon Id</label>
              <input
                name="coupon_id"
                onChange={handleChange}
                value={order.coupon_id}
                type="text"
                className="form-control"
                placeholder="Enter Coupon Id"
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                name="quantity"
                onChange={handleChange}
                value={order.quantity}
                type="text"
                className="form-control"
                placeholder="Enter Quantity"
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary mx-5 orderbtn"
            >
              Submit
            </button>
          </form>
        </div>
      </Popup>

      <div className="containers">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Pizza Id</th>
              <th scope="col">Pizza Type</th>
              <th scope="col">Pizza Name</th>
              <th scope="col">Pizza Description</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map((val) => {
              return (
                <>
                  <tr className="mytable">
                    <td scope="row" className="">
                      {val.pizzaId}
                    </td>
                    <td>{val.pizzaType}</td>
                    <td>{val.pizzaName}</td>
                    <td>{val.pizzaDescription}</td>
                    <td>{val.pizzaCost}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookOrder;
