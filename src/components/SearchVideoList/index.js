import styles from "./SearchVideoList.module.css"
import Videolist from "../../components/VideoList"
import { useState } from "react";



const filterVideos = (videos, searchText)=>{
    
    return videos.filter((video)=> video.category.includes(searchText) || video.title.includes(searchText))
    }



const SearchVideoList=({ videos })=>{
    const [searchText, setSearchText] = useState()
    
    const foundVideos = filterVideos(videos, searchText)
    return(
        <section className={styles.container}>
             <input
             type="search"
             placeholder="Pesquisar..."
             value={searchText}
             onChange={e =>setSearchText(e.target.value)}
             />
             <Videolist videos={foundVideos}
             />
      </section>
    )
}
export default SearchVideoList;