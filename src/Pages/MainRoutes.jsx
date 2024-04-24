import {
    createBrowserRouter,
  } from "react-router-dom";
  import Layout from '../Layout/Layout';
  import Home from '../Pages/Home';
  import Contact from '../Pages/Contact';
  import About from '../Pages/About';

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
              path:"/about",
              element:<About></About>
            },
            {
              path:"/contact",
              element:<Contact></Contact>
            }
          ]
        },
      ]);

export default router;