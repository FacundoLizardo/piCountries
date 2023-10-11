import { useState } from "react"
import {useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { onSearch, searchCountriesForm, clearForm, clearHome } from "../redux/actions"
import style from "./searchBar.module.css"
const SearchBar = () =>{

    const dispatch = useDispatch()
    const [nombre, setNombre] = useState('')
    const location = useLocation()
   
    
    const handleChange = (event) =>{
        event.preventDefault()
        setNombre(event.target.value)
    }


    const handler = async function (nombre){
        event.preventDefault()
        if(location.pathname === "/home"){
            dispatch(await onSearch(nombre))
        }if(location.pathname === "/addActivity"){
      
            dispatch(await searchCountriesForm(nombre))
            
        }
       setNombre('')
    }

    const clear = function () {
        
        if(location.pathname === "/addActivity"){
           
            const newForm = []
            dispatch(clearForm(newForm))
        }

        const buscados = []
        dispatch (clearHome(buscados))
        
    }
   

        
    return (
        
        <div className={style.mainContainer}>
            
            

             {location.pathname === '/home' && <div> <input type='search' onChange={handleChange} id = "busqueda" value={nombre}/>
             <button onClick={()=>handler(nombre)}>Search</button>

             <button onClick={clear}>Clear</button></div>}

             {location.pathname === '/addActivity' && <div className={style.mainForm}> <input type='search' onChange={handleChange} id = "busqueda" value={nombre}/>
             <button onClick={()=>handler(nombre)}>Search</button>

             <button onClick={clear}>Clear</button></div>}
        </div>
    )
}
export default SearchBar