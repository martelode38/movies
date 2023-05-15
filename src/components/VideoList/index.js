import styles from "./VideoList.module.css";
import Card from "../Card";

function VideoList({videos, empty}){
   
    const contador = videos.length
    let heading = empty
    if(contador>0){
        const noun = contador > 1 ? 'vídeos' : ' vídeo'
        heading = `${ contador } ${noun}`
    }

    return(
        <>
        <h2>{heading}</h2>

        <section className={styles.VideoList}>
            {videos.map((video)=><Card id={video.id} key= {video.id}/>)}
        </section>
        </>
    );
}

export default VideoList;