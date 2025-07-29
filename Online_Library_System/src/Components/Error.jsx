import { Link, useRouteError } from "react-router-dom";
import Header from "./Header";
import icon from "../assets/erroricon.jpg";
import "./Error.css";

function Error(){
    const err = useRouteError();

    return (
    <main>
      <Header/>
      <section className="errorSection">
        <img className="errorimage" src={icon} alt="Error Icon"/>
        <header>
          <h1>Page not found!</h1>
          <br/>
        </header>

        <article>
          <h2>
            Status: {err.status} - {err.statusText}
          </h2>
          <p>{err.data}</p>
          <br/>
        </article>

        <footer>
          <Link to="/">Click here to go to home page.</Link>
        </footer>
      </section>
    </main>
  );
}

export default Error;