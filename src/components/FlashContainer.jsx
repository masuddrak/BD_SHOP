import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FlashContainer = () => {
    const [end, setEnd] = useState()
    const [bestProducts, setBestProducts] = useState([])
    useEffect(() => {
        setInterval(() => {
            setEnd(moment().format('h:mm:ss'));
        }, 1000);
    }, [])
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBestProducts(data)
            })
    }, [])
    return (
        <div className="bg-white mb-4">
            <div className="flex justify-between p-3">
                <div className="flex gap-6">
                    <p className="text-[#F85606]">On Sale Now</p>
                    <div className="flex gap-3">
                        <p>Ending</p>
                        <p>{end}</p>
                    </div>
                </div>
                <div>
                    <button className="border border-1 py-1 px-3 border-orange-500">SHOP MORE</button>
                </div>
            </div>
            <hr />
            <div className="p-5 grid grid-cols-4 gap-4">
                {/* card */}
                {
                    bestProducts.map(product =>
                        <Link to={`/bestProductDetails/${product._id}`} key={product._id} className="hover:shadow-md p-3 transition-all">
                            <img src={product.url} alt="" />
                            <div>
                                <h2>{product.name}</h2>
                                <p>$ {product.price}</p>
                            </div>
                        </Link>)
                }
            </div>
        </div>
    );
};

export default FlashContainer;