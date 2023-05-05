import styles from "./Category.module.css";
import videos from "../../json/mt.json";

 export const categories = ["Matue", "Derek", "Ryu"]

 export function filterCategory(id)
 {
  return videos.filter(video => video.category === categories[id])
 }


function Category({category, children}){
    return(

    <section className={styles.Category}>

        <h2>{category}</h2>
       
              <div>
                {children}
             </div>

    </section>
    );
}

export default Category;