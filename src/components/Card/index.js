import { Link } from "react-router-dom";
import styles from "./Card.module.css"

function Card( {id} )
{
    return(
        
        <selction className={styles.card}>
           
            <Link to={`/watch/${id}`}>    

                <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                 alt="capa"/>


            </Link>


        </selction>

    );
}

export default Card;