import './navBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(<div className="navBar">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Guitar Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart</Link>
                        </li>  
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
    </div>);
};

export default NavBar;