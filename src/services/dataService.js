import axios from "axios";

var catalog = [
    {
        _id: "hjdnmxl",
        title: "Stratocaster",
        price: 99.99,
        stock: 30,
        category: "Guitar",
        discount: 20,
        image: "/img/strat.png"
    },
    {
        _id: "jeidhct",
        title: "Telecaster",
        price: 289.99,
        stock: 19,
        category: "Guitar",
        discount: 15,
        image: "/img/Tele.png"
    },
    {
        _id: "gydnukd",
        title: "Jaguar",
        price: 489.99,
        stock: 5,
        category: "Guitar",
        discount: 0,
        image: "/img/jaguar.png"
    },
    {
        _id: "vbtdlxu",
        title: "SG",
        price: 229.99,
        stock: 17,
        category: "Guitar",
        discount: 25,
        image: "/img/sg.png"
    },
    {
        _id: "plujidj",
        title: "Les Paul",
        price: 739.99,
        stock: 2,
        category: "Guitar",
        discount: 0,
        image: "/img/lespaul.png"
    },
    {
        _id: "ybhiksr",
        title: "V",
        price: 399.99,
        stock: 4,
        category: "Guitar",
        discount: 10,
        image: "/img/V.png"
    },
    {
        _id: "qpwoyfh",
        title: "Warlock",
        price: 699.99,
        stock: 3,
        category: "Guitar",
        discount: 10,
        image: "/img/warlock.png"
    },
    {
        _id: "bufhdjt",
        title: "Thinline",
        price: 88.99,
        stock: 16,
        category: "Guitar",
        discount: 15,
        image: "/img/thinline.png"
    },
    {
        _id: "paosjeb",
        title: "Acoustic",
        price: 149.99,
        stock: 32,
        category: "Guitar",
        discount: 20,
        image: "/img/acoustic.png"
    }
];

class DataService{
    async getCatalog(){
        // retrieve the data from the server
        // var catalog = request();
        let resp = await axios.get("http://127.0.0.1:5000/api/catalog");
        return resp.data;


        // Return mock data
        //return catalog;
    }

    async getCoupons(){
        // retrieve the data from the server
        // var catalog = request();
        let resp = await axios.get("http://127.0.0.1:5000/api/couponCode");
        return resp.data;
    }

    saveProduct(prod){
        console.log("Sending prod to the server..... NOT")
    }
    async saveCoupon(coup){
        let resp = await axios.post("http://127.0.0.1:5000//api/couponCode", coup);
        return resp.data;
    }
}
export default DataService