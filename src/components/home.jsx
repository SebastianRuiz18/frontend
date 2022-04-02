import './home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return(<div className='home'>
            <h1>This is Home</h1>
            <h4>We sell Instruments</h4>
            <div>
                <ul>
                    <li>
                        <Link to="/catalog" className='btn-home'> Check our amazing catalog!</Link>
                    </li>
                    <li>
                        <Link to="/about" className='btn-home'> About us!</Link>
                    </li>
                    <li>
                        <Link to="/cart" className='btn-home'> Check your shopping cart!</Link>
                    </li>
                </ul>
            </div>
            
    </div>);
};

export default Home;