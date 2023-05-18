import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Favorites.module.css"

function Favorites(){

    return(
        <div>

            <Header/>
            <Container>
            <section className={styles.fav}>
            <h2>meus favoritos</h2>
            
            </section>

            </Container>
        
        
            <Footer/>
        </div>
    )

}
export default Favorites;