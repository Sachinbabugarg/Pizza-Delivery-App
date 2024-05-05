import React,{useState,useEffect} from "react";
import'./Coupan.css';
import Popup from 'reactjs-popup';
import { toast} from "react-toastify";
import { useSelector } from "react-redux";
import axios from 'axios';

const ViewCoupan=()=>{
    const[coupans,setCoupans]=useState([]);



    const temp=useSelector((state)=>state);
    var cusId=temp.id;

    const viewCoupan = async (e) => {
      const res = await fetch(`http://localhost:8080/viewCoupon`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
    
      const data = await res.json();
      console.log(data);
  
      if (res.status === 404 || !data) {
        toast.dark('Error: Data Not Fetch', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      } else {
        setCoupans(data);
      
      }
    }





    useEffect(()=>{viewCoupan()},[])


    return(
        <>
        <h1 className="text-center">Coupan Management</h1>
                              
                            <div className="containers">
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Coupan Id</th>
                <th scope="col">Coupan Type</th>
                <th scope="col">Coupan Name</th>
                <th scope="col">Coupan Description</th>
                <th scope="col">Coupan Code</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody>  
              {
                coupans.map((val)=>{
                  
                    return(
                      <>
                             <tr className='mytable'>
                          <td scope="row">{val.coupanId}</td>
                          <td>{val.coupanName}</td>
                          <td>{val.coupanType}</td>                          
                          <td>{val.coupanDescription}</td>
                          <td>{val.couponValue}</td>
                          <td>
                   
                          </td>
                        </tr>
                      </>
                    )
                  
                })
              }
                     
        
     </tbody>
          </table>
    </div>
    </>
  );
}
export default ViewCoupan;