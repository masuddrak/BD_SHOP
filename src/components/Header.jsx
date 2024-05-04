import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { useContext} from "react";
import { authContext } from "../authProvider/AuthProvider";
import { IoPersonCircle } from "react-icons/io5";


const Header = () => {
    const { user, logoutUser } = useContext(authContext)
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    // const [card,setCard]=useState([])
    // useEffect(()=>{
    //     fetch("http://localhost:5000/addedProduct")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setCard(data)
    //     })
    // },[user])
    // console.log(card)

    const handelLogout = () => {
        logoutUser()
            .then(() => {
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link className="text-xl font-extrabold">BD_SHOP</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3 z-40">
                    {user == null && <div className="flex gap-3 items-center text-sm">
                        <Link to="/login" className="flex"><BsPerson className="text-xl font-bold"></BsPerson>Login</Link>
                        <div className="border border-1 h-2"></div>
                        <Link to="/register">Sing Up</Link>
                    </div>}
                    <button className="text-2xl"><FiShoppingCart></FiShoppingCart></button>
                    {/*  */}
                    {
                        user ? <div className="dropdown dropdown-end text-black">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <IoPersonCircle className="w-full h-full object-cover"></IoPersonCircle>
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={handelLogout}><a>Logout</a></li>
                            </ul>
                        </div> : ""
                    }

                    {/*  */}
                </div>
            </div>
        </div >
    );
};

export default Header;