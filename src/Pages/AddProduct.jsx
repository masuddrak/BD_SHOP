import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";

const AddProduct = () => {
    const { user } = useContext(authContext)
    console.log(user.email)
    const handelAddProduct = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const url = form.url.value
        const description = form.description.value
        const price = form.price.value
        const email = user?.email
        const productInfo = { name, url, description, price, email }
        console.log(productInfo)
        fetch("http://localhost:5000/products",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(productInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center">Create Product Now</h1>
                    <form onSubmit={handelAddProduct} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                            <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        {/* image */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block dark:text-gray-600">Photo Url</label>
                            <input type="text" name="url" placeholder="Photo Url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        {/* decription */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block dark:text-gray-600">Description</label>
                            <input type="text" name="description" placeholder="Description" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        {/* price */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block dark:text-gray-600">Price</label>
                            <input type="number" name="price" placeholder="Price" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>

                        <button className="block w-full p-3 text-center rounded-sm bg-[#f85606] text-white">Create Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;