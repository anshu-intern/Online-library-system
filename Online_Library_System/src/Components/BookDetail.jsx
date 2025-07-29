import { useParams } from "react-router-dom";
import "./BookDetail.css";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { useEffect } from "react";

function BookDetail(){
    const params = useParams();
    const database = useSelector( store => store.book.books);
    const [filterbook] = database.filter(book=> book.id === Number(params.id));

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
    
    return(
        <section className="details">
        <h1 className="detailheading">Here is the details of the book:</h1>
        <article className="bookDetailsection">
            <div className="detailImage">
            <img src={filterbook.image}className="detailImage"/>
            </div>
            <div className="bookitem">
             <h3 className="title">{filterbook.title}</h3>
             <span>By {filterbook.author}</span>
             <p className="desc">{filterbook.description}</p>
           <span>Rating: {filterbook.rating}</span>
            </div>
            <Link to={`/BrowseBooks/all`}><span>Back to browse section</span></Link>
            
        </article>
        <h3 className="title">Hope you find it imformative...</h3>
        <h3 className="title">
            Happy reading!
        </h3>
        </section>
    )

}

export default BookDetail;