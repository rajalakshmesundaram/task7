import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Editauthor = ({id}) => {
    const navigate=useNavigate()
    const[editData,setEditData]=useState({
        authorName:'',
        DOB:'',
        shortBiography:''
       
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
        navigate('/author')
    }

    
  return (
    <>
    <form onSubmit={handleFormSubmit}>
    <div className="container">
        <div className="mb-3 mr-3 row">
    <label className="col-sm-2 col-form-label">AuthorName</label>
    <div className="col-lg-4">
      <input type="text"  name='authorName' value={editData.authorName} onChange={handlechange}/>
    </div>
  </div>
   
  <div className="mb-3 mr-3 row">
    <label  className="col-sm-2 col-form-label">DOB:</label>
    <div className="col-lg-4">
      <input type="tel"  name='DOB' value={editData.DOB} onChange={handlechange}/>
    </div>
  </div>
  <div className="mb-3 mr-3 row">
    <label  className="col-sm-2 col-form-label">Short Biography:</label>
    <div className="col-lg-4">
      <input type="tel"  name='shortBiography' value={editData.shortBiography} onChange={handlechange}/>
    </div>
  </div>
  </div>
   <button className="btn btn-success" type='submit'>Update</button>
  </form>
  
    </>
  )
}

