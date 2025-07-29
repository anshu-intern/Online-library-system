import "./AddBookForm.css";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { addBook } from "../utils/bookSlice";

function AddBookForm(){

  const database = useSelector(store => store.book.books);
  const dispatch = useDispatch();
  const [options,setoptions] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const opt = database.reduce((acc,cur)=>{
      if(!acc.includes(cur.category))
      {
        acc.push(cur.category)
      }
      return acc;
    },[]);
    setoptions(opt);
  },[]);

  function handleSubmit(e){
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const title= formData.get("title").trim();
    const author= formData.get("author").trim();
    const category= formData.get("category");
    const description= formData.get("description").trim();
    const rating= parseFloat(formData.get("rating"));
    const image =  formData.get("image");

    let newError = {};

    if (!title) {
    newError.title = `Enter book's title!`;
  }

  if (!author) {
    newError.author = `Enter book's author!`;
  }

  if (!category) {
    newError.category = `Select book's category!`;
  }

  if (!description) {
    newError.description = `Enter book's description!`;
  }

  if (isNaN(rating) || rating < 1.0 || rating > 5.0) {
    newError.rating = `Give rating to the book!`;
  }

  if (!image || image.size === 0) {
    newError.image = `Upload the book's cover image!`;
  }
  
  if (Object.keys(newError).length > 0){
    setErrors(newError);
    return
  }

  const newBook = {
    "id" : database.length + 1,
    "title" : title,
    "author" : author,
    "category" : category,
    "description" : description,
    "rating" : rating,
    "image" : URL.createObjectURL(image)
  }

  setErrors({});
  dispatch(addBook(newBook));
  alert("Book added successfully!")
  form.reset();
  navigate(`/BrowseBooks/${category}`)
  }

    return(
      <section className="form">
        <h2>Add a New Book to the library</h2>
        <p>Fill out the below form to add a new book to the library. Happy reading!</p>
        <form className="inputForm" onSubmit={ e => handleSubmit(e)}>
              <div>
                <label htmlFor="title">Book Title:</label><br />
                <input type="text" id="title" name="title" placeholder="Enter book's title" required /><br />
                {errors.title && <span className="error">{errors.title}</span>}
              </div>

              <div>
                <label htmlFor="author">Author:</label><br />
                <input type="text" id="author" name="author" placeholder="Enter book's author name" required /><br />
                {errors.author && <span className="error">{errors.author}</span>}
              </div>

              <div>
                <label htmlFor="category">Category:</label><br />
                <select id="category" name="category" required>
                  <option value="">Select Category</option>
                  {options.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
                <br />
                {errors.category && <span className="error">{errors.category}</span>}
              </div>

              <div>
                <label htmlFor="description">Description:</label><br />
                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  cols="50"
                  maxLength={250}
                  placeholder="Enter description for the book (upto 250 chars)"
                  required
                ></textarea>
                <br />
                {errors.description && <span className="error">{errors.description}</span>}
              </div>

              <div>
                <label htmlFor="rating">Rating:</label><br/>
                <input type="number" id="rating" step="0.1" min="1.0" max="5.0" name="rating" placeholder="Enter book rating from 1.0 to 5.0"required /><br />
                {errors.rating && <span className="error">{errors.rating}</span>}
              </div>

              <div>
                <label htmlFor="image">Add book cover image:</label>
                <input type="file" accept="image/*" id="image" name="image" required /><br />
                {errors.image && <span className="error">{errors.image}</span>}
              </div>

              <div>
                <button type="submit">Add Book</button>
              </div>
            </form>
        
        </section>

    )
}

export default AddBookForm;