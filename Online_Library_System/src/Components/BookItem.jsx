import "./BookItem.css";
import { Link } from "react-router-dom";


function BookItem({book}){
    return (
   <section className="book">
      <img src={book.image} />
      <div className="bookitem">
        <div className="title">
      <h3>{book.title}</h3></div>
      <span>By {book.author}</span>
      <div className="desc"><p>{book.description}</p></div>
      <span>Rating: {book.rating}</span>
      <Link to={`/Book/${book.id}`}><button>View details</button></Link>
      </div>
    </section>
  );
}

export default BookItem;