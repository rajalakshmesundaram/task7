import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Books } from "./components/Books"
import { Navbar } from "./components/Navbar"
import { Author } from "./components/Author"
import { Create } from "./components/Create"
import { Createauthor } from "./components/Createauthor"
import { Editbook } from "./components/Editbook"
import { Editauthor } from "./components/Editauthor"
import { useState } from "react"


export const App = () => {
  const[id,setId]=useState(0)
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book' element={<Books setId={setId}/>}/>
      <Route path='/author' element={<Author setId={setId}/>}/>
      <Route path='/create'  element={<Create/>}/>
      <Route path='/createauthor' element={<Createauthor/>}/>
      <Route path='/editbook/:id' element={<Editbook id={id}/>}/>
      <Route path='/editauthor/:id' element={<Editauthor id={id}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
