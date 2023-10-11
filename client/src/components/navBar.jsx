import { Link } from "react-router-dom"
import SearchBar from "./searchBar"
import style from './NavBar.module.css'
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { filterByActivity, filterByContinent,orderAz, orderZa, orderMenMay, orderMayMen } from "../redux/actions"
import { useState } from "react"



 const NavBar = () =>{


    const location = useLocation()
    const dispatch = useDispatch()
    const buscados = useSelector((state)=> state.buscados)
    const [selectedActividad, setSelectedActividad] = useState('- Actividad -');
    const [selectedContinente, setSelectedContinente] = useState('- Continente -');

   

    const nombresUnicos = buscados.reduce((result, objeto) => {
        objeto.Activities.forEach(activity => {
          result.add(activity.nombre);
        });
        return result;
      }, new Set());
      
     
      const activitiesNames = [...nombresUnicos];
      
    const continentes = new Set (buscados.map((country) => country.continente))
    const arrayContinentes = [...continentes]


const defaultAct = '- Actividad -'
const defaultCont = '- Continente -'

const filterAct = (event)=>{
    if(event === '- Actividad -'){
        dispatch(filterByActivity(event)) 
    }
    setSelectedActividad(event.target.value)
    dispatch(filterByActivity(event.target.value))
    
    if (event.target.value === '- Actividad -') {
        setSelectedContinente('- Continente -');
    }
}

const filterContinent = (event)=>{
    if(event === '- Continente -'){
        dispatch(filterByContinent(event))
    }
    setSelectedContinente(event.target.value)
    dispatch(filterByContinent(event.target.value))
   
    if (event.target.value === '- Continente -') {
        setSelectedActividad('- Actividad -');
      }
}

const clearFilters = ()=>{
    setSelectedActividad('- Actividad -');
    setSelectedContinente('- Continente -');
    filterAct('- Actividad -')
    filterByContinent('- Continente -')
}

const handleOrder = (event) =>{
    
    if(event.target.value === 'az') dispatch(orderAz(event.target.value))
    if(event.target.value === 'za') dispatch(orderZa(event.target.value))
    if(event.target.value === 'menenorMayor') dispatch(orderMenMay(event.target.value))
    if(event.target.value === 'mayorMenor') dispatch(orderMayMen(event.target.value))
}

 return (
        <div className={style.mainContainer}>

            <Link to= '/home'>
                <button>Home</button>
            </Link>

            
            {(location.pathname != "/addActivity" && !location.pathname.includes('/detail')) && <Link to = '/addActivity'>
                <button>Add an Activity</button>
            </Link>}

            {(location.pathname != "/addActivity" && !location.pathname.includes('/detail')) && <SearchBar /> }

            {(location.pathname != "/addActivity" && !location.pathname.includes('/detail')) && <div>
            <label className={style.orderLabel}>Oreder :</label>
            <select onChange={handleOrder} className={style.order}>
                <option >Orden</option>
                <option value={'az'}>A → Z</option>
                <option value={'za'}>Z → A</option>
                <option value={'menenorMayor'}>Poblacion Men → May</option>
                <option value={'mayorMenor'}>Poblacion May → Men</option>
            </select>

 

            <label >Filter by:</label>
            <select onChange={filterAct} id="selectActividad" value = {selectedActividad} className={style.selectActivity}>
                <option >- Actividad -</option>
                {activitiesNames.map((name, index)=> <option key = {index} value = {name}>{name}</option>)}
            </select>


            <select onChange={filterContinent} id="selectContinente" value = {selectedContinente} className={style.selectContient}>
                <option >- Continente -</option>
                {arrayContinentes.map((continente, index)=> <option key = {index} value = {continente}>{continente}</option>)}
            </select>

            <button onClick={clearFilters}>
                Clear filters
            </button>
            </div> }


        </div>
    )
}


export default NavBar