import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";


const Layouts = () => {
  return (
    <div>
      <section className="flex justify-between px-10 shadow-lg py-5">
        <div>
          <h1 className="text-2xl font-bold">Amazon</h1>
        </div>
        <nav className="flex gap-5 text-2xl font-bold ml-10">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </nav>
      </section>
      <div className="min-h-screen">
        <Outlet></Outlet>
    </div>
     <Footer></Footer>
    </div>
  );
};

export default Layouts;
