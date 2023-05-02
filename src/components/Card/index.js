import styles from "./Card.module.css"

function Card( {id} )
{
    return(
        
        <selction className={styles.card}>
           
            <a href={`https://www.youtube.com/watch?v=${id}`}
                rel="noreferrer noopener" //evitar q usem o link de forma inadequada
                target="_blank">    

                <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="capa maquina do tempo"/>


            </a>


        </selction>

    );
}

export default Card;