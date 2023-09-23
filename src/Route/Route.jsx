
import { createBrowserRouter } from 'react-router-dom';
import AboutLayout from '../Layouts/AboutLayout';
import Layouts from '../Layouts/Layouts';
import About from '../components/About/About';
import Home from '../components/Home/Home';
import Index from '../components/Index/Index';
import Masseg from '../components/Masseg/Masseg';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Products from '../components/Products/Products';

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
                element:<Products></Products>,
                loader:() => fetch('https://dummyjson.com/products')
                
            },
            {
                path:"/product/:productId",
                element:<ProductDetails></ProductDetails>,
                loader:({params}) => fetch(`https://dummyjson.com/products/${params.productId}`)
            },
            {
                path:"/about",
                element:<AboutLayout></AboutLayout>,
                children: [
                    {
                        path:"/about/home",
                        element:<About></About>
                    },
                    {
                        path:"/about/index",
                        element:<Index></Index>
                    },
                    {
                        path:"/about/send",
                        element:<Masseg></Masseg>
                        
                    }
                ]
               
            }
        ]
      
    }
])

export default router;