import {
    createBrowserRouter,
  } from "react-router-dom";
  import Layout from '../Layout/Layout';
  import Home from '../Pages/Home';
  import Contact from '../Pages/Contact';
  import About from '../Pages/About';
import Register from "../components/Register";
import AddProduct from "./AddProduct";
import BestProdoctDetails from "../components/BestProdoctDetails";
import Login from "../components/Login";
import PrivateRoute from "../authProvider/PrivateRoute";

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout></Layout>,
          children:[
            {
              path:"/",
              element:<Home></Home>
            },
            {
              path:"/addProduct",
              element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
              path:"/bestProductDetails/:id",
              element:<BestProdoctDetails></BestProdoctDetails>,
              loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
              path:"/about",
              element:<About></About>
            },
            {
              path:"/contact",
              element:<Contact></Contact>
            },
            {
              path:"/register",
              element:<Register></Register>
            },
            {
              path:"/login",
              element:<Login></Login>
            },
          ]
        },
      ]);

export default router;