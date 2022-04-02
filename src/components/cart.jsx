import './cart.css';
import { useContext } from 'react';
import store from '../context/storeContext';
import ProductInCart from './prodInCart';

const Cart = () =>{

    let {cart, addProductToCart} = useContext(store);


    return(
        <div className="cart-page">
            <h1> This is your cart! </h1>
            <h5>Are you ready to pay for your {cart.length} items?</h5>
            
            <div className='products'>
                {cart.map((prod) => ( 
                <div className='product'>
                    <ProductInCart key={prod._id} data={prod}></ProductInCart>
                </div>
                ))}
            </div>
            <h5>Created by: Sebastian Ruiz</h5>
        </div>
    );
};

export default Cart;