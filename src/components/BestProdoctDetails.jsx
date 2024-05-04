
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../authProvider/AuthProvider";

const BestProdoctDetails = () => {
    const loaderData = useLoaderData()
    const { user } = useContext(authContext)
    console.log(user.email)
    const handelDeleteProduct = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    const handelAddCardItems = (loaderData) => {
        const UserEmail = user.email
        const addedinfo = { loaderData, UserEmail}
        fetch(`http://localhost:5000/addedProduct`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addedinfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div >
            <div className="my-4 flex gap-4">
                <button className="bg-[#F57224] px-3 py-1" onClick={() => handelDeleteProduct(loaderData?._id)}>Delete</button>
                <button className="bg-[#2ABBE8] px-3 py-1" onClick={() => handelDeleteProduct(loaderData?.email)}>Update</button>
            </div>
            <div className=" grid grid-cols-8 gap-4">
                <div className="col-span-5 grid grid-cols-2 gap-4">
                    <div className="h-[40vh]">
                        <img className="h-full" src={loaderData?.url} alt="" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{loaderData.name}</h2>
                        <p>{loaderData.description}</p>
                        <button className="bg-[#2ABBE8] px-3 py-1" onClick={() => handelAddCardItems(loaderData || {})}>Add Card</button>
                    </div>
                </div>
                {/* right side bar */}
                <div>

                </div>
            </div>
        </div>
    );
};

export default BestProdoctDetails;