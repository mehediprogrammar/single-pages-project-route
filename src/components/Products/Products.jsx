import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";


const Products = () => {
    const {products} = useLoaderData();
   
    return (
        <div className="grid grid-cols-3 gap-5 m-10">
            {
                products.map(product => <Cards key={product.id } product={product} ></Cards>)
            }
        </div>
    );
};

export default Products;