import { Link, Outlet } from "react-router-dom";

const AboutLayout = () => {
  return (
    <div className="flex gap-5 m-10">
  
      <div className="w-[20%] bg-white shadow-lg p-5">
        <ul>
          <li>
            <Link to="/about/home">About</Link>
          </li>
          <li>
            <Link to="/about/index">Index</Link>
          </li>
          <li>
            <Link to="/about/send">send</Link>
          </li>
        </ul>
      </div>
       <div className="w-[80%]">
       <Outlet ></Outlet>
       </div>
    </div>
  );
};

export default AboutLayout;
