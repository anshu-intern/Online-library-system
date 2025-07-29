import "./BookCategory.css";
import icon from "../assets/icon.json";
import { useEffect,useState } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

function BookCategory(){
    const [listItem,setlistItem] = useState([]);
    const database = useSelector(store => store.book.books);

    useEffect(() => {
        const bookCategory = database.reduce((acc,cur) => {
            if(!acc.includes(cur.category)){
                acc.push(cur.category)}
                return acc;

        },[]);
        setlistItem(bookCategory);
    },[]);

    return(
        <article className="bookCategory">
        <h2 className="categoryHead">
            📖 Browse Our Book Categories:
        </h2>
        <ul>
            {
                listItem.map((item,index)=>(
                    <Link key={index} className="linkcategory" to={`BrowseBooks/${item}`}><li className="categoryItem"><i className={icon.filter(a => (a.name === item))[0].icon} style={{ color: icon.filter(a => (a.name === item))[0].color }}></i>{item}</li></Link>
                ))
            }

    </ul>

        </article>
    )
}

export default BookCategory;