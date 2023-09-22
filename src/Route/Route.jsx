
import { createBrowserRouter } from 'react-router-dom';
import Layouts from '../Layouts/Layouts';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layouts></Layouts>,
        children:[
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:"/products",
                element:<Products></Products>
            },
            {
                path:"/about",
                element:<About></About>
            }
        ]
    }
])

export default router;