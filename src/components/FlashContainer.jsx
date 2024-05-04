
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FlashContainer = () => {
    const [bestProducts, setBestProducts] = useState([])
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const deadline = "Augest, 10, 2024";
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);
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
            <div className="flex justify-between  p-3">
                <div className="flex gap-6 items-center">
                    <p className="text-[#F85606]">On Sale Now</p>
                    <div className="flex gap-3 items-center">
                        <p>Ending</p>

                        <div className="flex gap-3 ">
                            <p className="bg-[#F85606] py-1 px-3 text-white rounded-md">{hours}h</p>
                            <p className="bg-[#F85606] py-1 px-3 text-white rounded-md">{minutes}m</p>
                            <p className="bg-[#F85606] py-1 px-3 text-white rounded-md">{seconds}s</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="border border-1 py-1 px-3 border-orange-500">SHOP MORE</button>
                </div>
            </div>
            <hr />
            <div className="py-3 grid grid-cols-6 gap-4">
                {/* card */}
                {
                    bestProducts.map(product =>
                        <Link to={`/bestProductDetails/${product._id}`} key={product._id} className="hover:shadow-md p-3 transition-all">
                            <img src={product.url} alt="" />
                            <div>
                                {/* <h2 className="text-sm">{product?.name.length > 50 ? <div>
                                    {product?.name.slice(0, 50)}...
                                </div> : product?.name}</h2> */}
                                <p className="text-xl">${product?.price}</p>
                            </div>
                        </Link>)
                }
            </div>
        </div>
    );
};

export default FlashContainer;