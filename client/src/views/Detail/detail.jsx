import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import style from './detail.module.css'

const Detail = () =>{
    const {id} = useParams()
    const buscados = useSelector((state)=> state.buscados)
    
    const countryAndActivity = buscados.filter((country) => country.id === id )
    const country = countryAndActivity[0]
    const countryActivity= countryAndActivity[0].Activities;
    console.log(country);
    console.log(countryActivity);
    countryActivity.map((act)=>{console.log(act.nombre);})

    
    return (

        <div className={style.mainContainer}>


            <div className={style.topDiv}>
                <img src = {country.bandera} className={style.image}></img>

                <div className={style.text}>
                <h2 className={country.nombre}>Name : {country.nombre}</h2>
                <h2>Capital : {country.capital}</h2>
                <h2>ID : {country.id}</h2>
                <h2>Contient : {country.continente}</h2>
                <h2>Subregion : {country.subregion}</h2>
                <h2>Area : {country.area} Km</h2>
                <h2>Population : {country.poblacion} people</h2>
            </div>
            </div>

            <h2 className={style.description}>Recreative activities to do in this country</h2>
            <div className={style.bottomDiv}>
            {countryActivity.map((act)=>{
                return(<div className={style.card}>
                <h3>Type of activity: {act.nombre}</h3>
                <h3>Difficulty:{act.dificultad}</h3>
                <h3>Duration: {act.duracion}</h3>
                <h3>Season: {act.temporada}</h3>
            </div>)})}

            </div>

           
           
        </div>
    )
}
export default Detail

// ID (Código de tres letras).
// Nombre.
// Imagen de la bandera.
// Continente.
// Capital.
// Subregión (si tiene).
// Área (si tiene).
// Población.