import "./Search.css";

function Search({search,setSearch,searchBook}){
    return(
    <section className="searchSection">
    <input type="text" value={search} placeholder="Type to search by title or author in the current genre..." onChange={e => setSearch(e.target.value)}/>
    <button onClick={searchBook}>Search</button>
    </section>
    )
}

export default Search;