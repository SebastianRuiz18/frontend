import './admin.css';
import {useState, useEffect} from "react";
import DataService from '../services/dataService';

const Admin = () =>{
    const [prod, setProd] = useState({});
    const [coup, setCoup] = useState({});
    const [allCoupons, setAllCoupons] = useState([])
    const [allItems, setAllItems] = useState([])

    const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name);

        var copy = prod;
        copy[e.target.name] = e.target.value;
        setProd(copy);
    };

    const handleCodeChange = (e) => {
        var copy = coup;
        copy[e.target.name] = e.target.value;
        setCoup(copy);
    };

    const saveProduct = () => {
        console.log(prod);

        let service = new DataService();
        service.saveProduct(prod);

        let copy = [...allItems];
        copy.push(prod);
        setAllItems(copy);
    };

    const saveCoupon = async () => {
        console.log(coup);

        let fixed = {...coup};
        fixed.discount = parseInt(coup.discount);
 
        let service = new DataService();
        let resp = await service.saveCoupon(fixed);

        let copy = [...allCoupons];
        copy.push(coup);
        setAllCoupons(copy);
    };

    const loadCoupons = async () => {
        let service = new DataService();
        let all = await service.getCoupons();
        setAllCoupons(all);
    }

    useEffect(() => {
        loadCoupons();
    }, []);
   
    
    return(
        <div className="admin">
        <section>
            <h3>Register new product</h3>

            <div className="form">
                <div className="my-control">
                    <label>Title:</label>
                    <input onChange={handleInputChange} name='title' type="text"></input>
                </div>

                <div className="my-control">
                    <label>Image:</label>

                    <input onChange={handleInputChange} name='image' type="text"></input>
                </div>

                <div className="my-control">
                    <label>Category:</label>
                    <input onChange={handleInputChange} name='category' type="text"></input>
                </div>

                <div className="my-control">
                    <label>Price</label>
                    <input onChange={handleInputChange} name='price' type="text"></input>
                </div>

                <div className="my-control">
                    <button onClick={saveProduct} className="btn btn-dark">Save Product</button>
                </div>
            </div>

            <div className='item-list'>
            {allItems.map( (prod, index) => (
                <div key={index}>
                    <label>  <label>{prod.title}</label> - <label>${prod.price}</label> </label>
                </div>
            ))}
        </div>  
        </section>

      <section>
        <h3>Coupon Codes</h3>

        <div className="form">
                <div className="my-control">
                    <label>Code:</label>
                    <input onChange={handleCodeChange} name='code' type="text"></input>
                </div>

                <div className="my-control">
                    <label>Discount:</label>

                    <input onChange={handleCodeChange} name='discount' type="text"></input>
                </div>

                <div className="my-control">
                    <button onClick={saveCoupon} className="btn btn-dark">Save Coupon</button>
                </div>
            </div>

        <div className='coupon-list'>
            {allCoupons.map( (coupon) => (
                <div key={coupon.code}>
                    <label>  <label>{coupon.code}</label> - <label>{coupon.discount}%</label> </label>
                </div>
            ))}
        </div>                  

      </section>
    </div>
    );
};

export default Admin;