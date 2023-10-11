import countries from "../../imagen/countries.png"
import styles from "./landing.module.css"
import {Link} from "react-router-dom"
const Landing = () =>{
    return (
        <div className={styles.mainContainer}>
             <Link to= '/home'>
                <button >Home</button>
            </Link>
            
           
        </div>

    )
}
export default Landing