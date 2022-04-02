import './navBar.css';
import { Link } from "react-router-dom";
import store from '../context/storeContext';
import { useContext } from 'react';

const NavBar = () => {
    const cart = useContext(store).cart; // Read cart from context

    const getNumber = () => {
        
        let total = 0;
        for(let i = 0; i < cart.length; i++){
            let prod = cart[i];
            total += prod.quantity;
        }
        return total;
    };

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
                        <li className="nav-item">
                        <Link className="nav-link" to="/admin">Admin</Link>
                        </li> 
                    </ul>
                    <form class="d-flex">
                        Cart: {getNumber()}
                    </form>
                    </div>
                </div>
                </nav>
    </div>);
};

export default NavBar;