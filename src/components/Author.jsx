import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Author = ({setId}) => {
 const navigate=useNavigate();
  const[products,setProducts]=useState([])
  const[deleteData,setDeleteData]=useState([])
    useEffect(()=>{
        fetchData();
    },[deleteData])
    const fetchData=async()=>{
        await axios.get("https://65e86de24bb72f0a9c4f4e5a.mockapi.io/BookAuthorDetail")
        .then(res=>setProducts(res.data))
        .catch((err)=>{console.log(err)})
    }
     const handleDelete = async(id)=>{
    await axios.delete(`https://65e86de24bb72f0a9c4f4e5a.mockapi.io/BookAuthorDetail/${id}`)
    .then(res=>setDeleteData(res.data))
    .catch((err)=>{console.log(err)})
  }
   const  handleEdit=(id)=>{
    setId(id)
navigate(`/editauthor/${id}`)
  }

 return (
    <div>
      <div className="container mt-5">

        <h1>Book Author Detail </h1>
        <div className="row mt-5 py-3">
          {products.map((item, index) => (
            <div className="col-lg-4"key={index} >
            <div  className="card">
                
              <div className="card-body">
                <h5 className="card-title">Author's Name:{item.authorName}</h5>
                <p className="card-text">DOB:{item.DOB}</p>
                <p className="card-text">Short Biography:{item.shortBiography}</p>
                 <button className="btn btn-primary"onClick={()=>{handleEdit(item.id)}}>Edit</button>
                      
        <button className="btn btn-danger"onClick={()=>{handleDelete(item.id)}}>Delete</button>
       
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
