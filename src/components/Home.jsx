import { useNavigate } from 'react-router-dom'
import './style/Home.css'
export const Home = () => {
 const navigate=useNavigate();
  const handleAddBook=()=>{
   navigate('/create')
  }
  const handleAddAuthor=()=>{
    navigate('/createauthor')
  }
  
  return (
    <div>
        <header>
            <h4>welcome to universal library</h4>
            <img src="https://img.freepik.com/free-photo/ancient-books-adorn-library-carefully-arranged-with-classics-rare-gems_157027-2332.jpg"/>
            <button className='btn btn-success'onClick={handleAddBook}>Add book</button><br/><br/>

             <button className='btn btn-success'onClick={handleAddAuthor}>Add Author Detail</button>
        </header>
    </div>
  )
}



