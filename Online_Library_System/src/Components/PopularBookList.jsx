import "./PopularBookList.css";
import { useEffect,useState } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

function PopularBookList(){

  const [popularItem, setpopularItem] = useState([]);
  const database = useSelector( store => store.book.books);

    useEffect(() => {
      const idx = Array.from( {length : 12} ,() => Math.floor(Math.random() * database.length + 0))
      setpopularItem(idx)
    },[]);

    return(
        <article className="popularBookList">
        <h2 className="listHead">
            Here are our some of the most popular books:
        </h2>
        <ul className="popularList">
          {
            popularItem.map((item,index)=>{
              return(
                <li key={index} className="popularListItem">
                     <strong>{database[item].title}</strong> by {database[item].author} – 
                     <Link key={index} className="polularLink" to={`Book/${database[item].id}`}>
                      View Details
                      </Link>
                </li>
              )
            })
            
          }
        </ul>
        </article>
    )

}

export default PopularBookList;