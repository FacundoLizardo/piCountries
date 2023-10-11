import { useState, useEffect } from 'react'
import {Home, Landing, Formulario, SearchBar, NavBar, Detail} from "./views"
import { Routes, Route, useLocation } from 'react-router-dom'
import {useDispatch} from "react-redux"
import axios from 'axios';
import { getCountries } from './redux/actions';





function App() {

  const dispatch = useDispatch()
  const [countries, setCountries] = useState([])
  const location = useLocation()

  useEffect(() => {
    dispatch(getCountries())
  }, [])
  

  return (
    
      <div>
        {location.pathname != '/' && (<NavBar/>)}
        <Routes>
        <Route path='/' element = {<Landing/>}/>
        <Route path = '/home' element = {<Home countries = {countries}/>} />
        <Route path='/detail/:id' element = {<Detail/>}/>
        <Route path='/addActivity' element = {<Formulario />}/>
        </Routes>
       
        

      </div>
    
  
  )
}

export default App
