import React, { useEffect, useState } from 'react'
import styles from "./Paginacion.module.css"

export const Paginacion = ({page, setPage, cantidadDePaginas}) => {
 

          

    const nextPage =()=>{
        if(page === cantidadDePaginas){
        
            setPage(cantidadDePaginas)
        }
        if(page < cantidadDePaginas){
            setPage(page +1)
        }
    }

    const prevPage = ()=>{
        if(page <= 1 ){
            setPage(1)
        }
        if(page >= 2 )
        setPage(page -1)
    }

    
  return (
    <div className={styles.mainContainer}>
        
        <button className={styles.buttonPages} onClick={prevPage}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M5 12l6 6"></path>
                <path d="M5 12l6 -6"></path>
            </svg>
        </button>

        <p className={styles.parrafoPaginacion}>Pagina {page} de {cantidadDePaginas}</p>
       
        <button className={styles.buttonPages} onClick={nextPage}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
            </svg>
        </button>
    </div>
  )
}
