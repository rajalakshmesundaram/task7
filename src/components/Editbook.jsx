import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Editbook = ({id}) => {
    const navigate=useNavigate()
    const[editData,setEditData]=useState({
        title:'',
        author:'',
        ISBNnumber:'',
        PublicationDate:''
    })
    useEffect(()=>{
fetchData()
    },[])
    const fetchData=async()=>{
        await axios.get(`https://65e86de24bb72f0a9c4f4e5a.mockapi.io/BookAuthorDetail/${id}`)
        .then((res)=>setEditData(res.data))
        .catch((err)=>console.log(err))
    }
    const handlechange=(e)=>{
        const{name,value}=e.target
        setEditData((val)=>({
            ...val ,[name] : value
        })
        )
    }
    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        await axios.put(`https://65e86de24bb72f0a9c4f4e5a.mockapi.io/BookAuthorDetail/${id}`,editData)
        .then(res=>console.log(res.data))
        .catch((err)=>console.log(err))
        navigate('/books')
    }

    
  return (
    <>
    <form onSubmit={handleFormSubmit}>
    <div className="container">
        <div className="mb-3 mr-3 row">
    <label className="col-sm-2 col-form-label">Title</label>
    <div className="col-lg-4">
      <input type="text"  name='title' value={editData.title} onChange={handlechange}/>
    </div>
  </div>
   <div className="mb-3 mr-3 row">
    <label  className="col-sm-2 col-form-label">Author:</label>
    <div className="col-lg-4">
      <input type="text"  name='author' value={editData.author} onChange={handlechange}/>
    </div>
  </div>
  <div className="mb-3 mr-3 row">
    <label  className="col-sm-2 col-form-label">ISBN Number:</label>
    <div className="col-lg-4">
      <input type="tel"  name='ISBNnumber' value={editData.ISBNnumber} onChange={handlechange}/>
    </div>
  </div>
  <div className="mb-3 mr-3 row">
    <label  className="col-sm-2 col-form-label">Publication Date:</label>
    <div className="col-lg-4">
      <input type="tel"  name='PublicationDate' value={editData.PublicationDate} onChange={handlechange}/>
    </div>
  </div>
  </div>
   <button className="btn btn-success" type='submit'>Update</button>
  </form>
  
    </>
  )
}
