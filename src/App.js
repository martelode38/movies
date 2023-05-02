
import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/mt.json";


function App() {
  return (
    <div>
        <Header/>

        <Banner image ="home"/>

        <Container>
        <h2>Matuê - Máquina do tempo</h2>
          <section className="cards">
          {
            videos.map((e) =><Card id={e.id} key={e.id}/>)
          }
            </section>


        </Container>
       
        <Footer/>
   </div>
  );
}

export default App;
