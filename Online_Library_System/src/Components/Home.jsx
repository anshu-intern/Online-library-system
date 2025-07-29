import BookCategory from "./BookCategory";
import PopularBookList from "./PopularBookList";
import Welcome from "./Welcome";
import "./Home.css";

function Home(){
    return(
        <>
        <Welcome/>
        <section className="homeSection">
        <BookCategory/>
        <PopularBookList/>
        </section>
        <h2>Reading is fun!!!</h2>
        </>
    )
}

export default Home;