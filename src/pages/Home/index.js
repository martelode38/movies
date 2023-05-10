
import { useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, {categories, filterCategory} from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";




function Home() {
  
  const [nome, setNome] = useState()
  
  let NomeDigitado =''

  function pegarNome(e){
    console.log(e.target.value)
    setNome(e.target.value)
    

  }


  return (
    <div>
        <Header/>

        <Banner image ="home"/>

        <Container>

          <input
            type="text"
            placeholder="nome"
            onChange={pegarNome}

          />
          <h2>{nome}</h2>

          {/* {
            categories.map((category, index)=>
            <Category category={category}>
        
          {filterCategory(index).map((video)=> <Card id={video.id} key={video.id}/>)}
            </Category>)
            
          } */}
          

        </Container>
       
        <Footer/>
   </div>
  );
}

export default Home;
