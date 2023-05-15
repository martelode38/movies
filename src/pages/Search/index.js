import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchVideoList from "../../components/SearchVideoList";
import styles from "./Search.module.css";
import videos from "../../json/mt.json"
function Search(){

    return(
        <>
        <Header/>
        <Container>
        <section className={styles.search}>
        
        

        <SearchVideoList videos={videos}/>

     

        </section>
        </Container>

        <Footer/>
        </>
    );
}


export default Search;