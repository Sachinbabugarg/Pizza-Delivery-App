import React,{useState,useEffect} from "react";
import'./Coupan.css';
import Popup from 'reactjs-popup';
import { toast} from "react-toastify";
import { useSelector } from "react-redux";
import axios from 'axios';

const Coupan=()=>{
    const[coupans,setCoupans]=useState([]);

    const[addCoupan,setAddCoupan]=useState({
        coupanName:"",
        coupanType:"",
        coupanDescription:"",
        couponValue:""
    });

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

    const setCoupanDetails=async(e)=>{
        const{name,value}=e.target;
        setAddCoupan((preData)=>{
            return{
                ...preData,
                [name]:value
            }
        })
     }

    const addCoupanDetails=async(e)=>{
        e.preventDefault();

        const {coupanName,coupanType,coupanDescription, couponValue}=addCoupan;
       
        if(coupanName===""||coupanType===""||coupanDescription===""||couponValue===""){
          toast.dark('All fields are required', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
      }else{
        const res=await fetch(`http://localhost:8080/addCoupon/${cusId}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                coupanName,coupanType,coupanDescription,couponValue
            })
          
        });

        const addData=await res.json();

        console.log(`${addData} data added`);
        
       

        if(res.status===404||!addData){
            toast.dark('Error:Data Not Save', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
        }else{
          viewCoupan();
            toast.dark('Data Save Successfully', {
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
        viewCoupan();
    };
    
const delCoupan=async(delcp)=>{
    try{
        const res=await fetch(`http://localhost:8080/deleteCoupan/${delcp}`,{
            method:"delete",
        });
        const postDelete=await res.json();
        if(postDelete){
            const newData=postDelete.filter((item)=>{
                return item._id!==postDelete._id
            });
            setCoupans(newData);
            
        }
    } catch (error){
        console.log(error)
    }
    viewCoupan()
    toast.dark('Data Deleted Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

    useEffect(()=>{viewCoupan()},[])


    return(
        <>
        <h1 className="text-center">Coupon Management</h1>
                              <Popup trigger={<button className="btn btn-primary mx-5 coupanbtn" >Add Coupon</button>} position="right center">
                                 <div className="popup">
                                <h2>Add Coupan</h2>
                                <form className="addCoupanForm">
                                <div className="form-group">
                                    <label htmlFor="coupanName">Coupon Name</label>
                                    <input type="text" className="form-control" id="coupanName" placeholder="Enter Coupan Name" onChange={setCoupanDetails} value={addCoupan.coupanName} name="coupanName" />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="coupanType">Coupon Type</label>
                                    <input type="text" className="form-control" id="coupanType" placeholder="Enter Coupan Type" onChange={setCoupanDetails} value={addCoupan.coupanType} name="coupanType"/>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="coupanDescription">Coupon Description</label>
                                    <input type="text" className="form-control" id="coupanDescription" placeholder="Enter Coupan Description" onChange={setCoupanDetails} value={addCoupan.coupanDescription} name="coupanDescription"/>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="coupanDescription">Coupon Code</label>
                                    <input type="text" className="form-control" id="coupanValue" placeholder="Enter Coupan Value" onChange={setCoupanDetails} value={addCoupan.couponValue} name="couponValue"/>
                                  </div>
                                  <button type="submit" className="btn btn-primary" onClick={addCoupanDetails}>Submit</button>
                                </form>
                              </div>
                            </Popup>
                            <div className="containers">
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Coupon Id</th>
                <th scope="col">Coupon Type</th>
                <th scope="col">Coupon Name</th>
                <th scope="col">Coupon Description</th>
                <th scope="col">Coupon Code</th>
                <th scope="col">Action</th>
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
                          <button className="btn btn-primary" onClick={()=>delCoupan(val.coupanId)}>Delete Coupan</button>
                         
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
export default Coupan;