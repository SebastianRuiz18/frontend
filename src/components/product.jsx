import './product.css';
import QuantityPicker from './quantityPicker';
import { useState, useContext } from 'react';
import store from '../context/storeContext';

const Product = (props) => {

    const [quantity, setQuantity] = useState(1);

    const addProdToCart = useContext(store).addProdToCart;

    const onQuantityChange = (value) =>{
        console.log("Quantity Changed to:", value);
        setQuantity(value);

    };

    const getTotal = () => {
        let total = quantity * props.data.price;
        return "$" + total.toFixed(2);
    };

    const addProduct = () => {

        // create an obj
        let cartProd = {...props.data};
        cartProd.quantity = quantity;

        // add prod to context (state)
        addProdToCart(cartProd);
    };

    return(<div className="product">
                <img className='image' src={props.data.image} alt="product img"/>
                <h2>{props.data.title}</h2>
                <label className='price'>${props.data.price}</label>
                <label className='total'>{getTotal()}</label>
                <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
                <button onClick={addProduct} className='add-cart'>Add</button>
            </div>);
};

export default Product;