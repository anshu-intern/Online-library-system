import "./Nav.css";
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav className="navbar">
            <ul className="navList">
                <Link to="/" className="listItem"><li>Home</li></Link>
                <Link to="/BrowseBooks/all" className="listItem"><li>Browse Books</li></Link>
                <Link to="/AddBook" className="listItem"><li>Add Book</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;