import { useLoaderData } from "react-router-dom";

const BestProdoctDetails = () => {
    const loaderData=useLoaderData()
    console.log(loaderData)
    return (
        <div>
            <h2>Best product</h2>
            <h2>Best product</h2>
            <h2>Best product</h2>
        </div>
    );
};

export default BestProdoctDetails;