import BookItem from "./BookItem";
import "./BrowseBooks.css";
import Search from "./Search";
import { useLocation, useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { Fragment,useEffect, useState } from "react";
import {useSelector} from "react-redux";

function BrowseBooks(){
    const [search,setSearch] = useState('')
    const [booklist,setBookList] = useState([])
    const [initbooklist,setinitBookList] = useState([])
    const [noResults, setNoResults] = useState(false);
    const param = useParams();
    const location = useLocation();

    const database = useSelector(store => store.book.books);

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    const groupCategory = database.reduce((groups,book)=>{
        let category = book.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(book);
        return groups;
    },{});

    useEffect(() => {

    let bookarr = [];
    if(param.category !== "all")
    {
        bookarr = Object.entries(groupCategory).filter(([a,b]) => (a === param.category))
        setBookList(bookarr)
        setinitBookList(bookarr)

    } else{
        bookarr = Object.entries(groupCategory)
        setBookList(bookarr)
        setinitBookList(bookarr)
    }
    setNoResults(false);

    }, [param.category, location]);
    

    function setSearchItem(e){
            setSearch(e)
    }

    function searchBookItem(){
        if(search.trim().length !== 0)
            {
                const res = initbooklist.map(([a,b])=> [a,b.filter(c => c.title.toLowerCase().includes(search.toLowerCase())||c.author.toLowerCase().includes(search.toLowerCase()))]).filter(([c,d]) => (d.length > 0));
                if(res.length === 0){
                setBookList([]);
                setNoResults(true);
            } else {
                setBookList(res);
                setNoResults(false);
            }
                setSearch('')
            }  
    }
   
    return(
        <>
        <h2>Browse our collection across different genres</h2>
        <p className="genrelist">{
        ["all", ...Object.keys(groupCategory)].map((item,index,arr)=>(<Fragment key={item}><Link to={`/BrowseBooks/${encodeURIComponent(item)}`}><span>{item}</span></Link>{index < arr.length - 1 &&  <span className="span">,</span>}</Fragment> ))
        }</p>
        <Search search={search} setSearch={setSearchItem} searchBook={searchBookItem}/>
        <section className="bookcategory">
            
        { noResults ? (<><h1>No items match the search</h1><h2 className={"reset"} onClick={() => {setBookList(initbooklist);setNoResults(false);}}>reset search</h2></>) : (
            booklist.map(([category,booksInCategory]) => (
                    <article key={category}>
                     <h2>{category}</h2>
                     <div className="bookItem">
                          {booksInCategory.map(book => (
                   <BookItem key={book.id} book={book} />
                          ))}
                      </div>
                     </article>
            )))  
        }
        <h2>That's all folks!</h2>
        </section>
        </> 
    )
}

export default BrowseBooks;