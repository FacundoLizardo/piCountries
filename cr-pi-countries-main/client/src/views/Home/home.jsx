import style from './Home.module.css'
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { Paginacion } from '../../components/Paginacion/Paginacion';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Home = () => {

    const buscados = useSelector((state)=> state.buscados)

    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
   
    let cantidadDePaginas = 1
   
    if(buscados.length > 10){ 
       cantidadDePaginas = Math.ceil(buscados.length / perPage) 
    }
   
    const render = buscados.slice((page -1) * perPage, (page -1) * perPage + perPage)

       
    
    return (
        <div className={style.mainContainer}>
            
            <CardsContainer buscados = {render}/>
            
            <Paginacion page = {page} setPage={setPage} cantidadDePaginas = {cantidadDePaginas}/>
        </div>
    )
}

export default Home;