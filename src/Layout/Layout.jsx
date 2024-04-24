import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const Layout = () => {
    return (
        <div >
            <div className="bg-[#f85606] text-white">
                <div className="w-4/5 mx-auto">
                    <Header></Header>
                </div>
            </div>
            <div className="w-4/5 mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;