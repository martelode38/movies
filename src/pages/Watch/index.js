import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Watch.module.css"
function Watch(){
    return(
     <>
     <Header/>
    <Container>
        <section className={styles.watch}>
            <h1>Assista:</h1>
           <iframe width="480" height="240" src="https://www.youtube.com/embed/eEWvcUn9MIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

        </section>
    </Container>

     <Footer/>
     
     
     </>
    );
}

export default Watch;