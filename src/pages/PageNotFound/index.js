import styles from "./PageNotFound.module.css";
import erro404 from './erro404.png';
function PageNotFound(){
    return(
       <section className={styles.container}>
        <h2>Ops, o Conteúdo não foi localizado!</h2>
        
        <img src={erro404} alt="Logo de pagina não localizado"/>
         
       </section> 
    );
}

export default PageNotFound;