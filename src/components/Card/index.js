import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png"
import iconUnFavorite from "./unfavorite.png"


function Card( {id} )
{
    return(
        
        <selction className={styles.card}>
           
            <Link to={`/watch/${id}`}>    

                <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                 alt="capa" className={styles.capa}/>


            </Link>
            
            <figure className={styles.favorites}>
                <img src={iconFavorite} alt="íconde de favoritar"/>
            </figure>

        </selction>

    );
}

export default Card;