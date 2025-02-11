import { Link } from "react-router-dom";
import fb from "../../../assets/images/facebook.png";
import insta from "../../../assets/images/instagram.png";
import linkedIn from "../../../assets/images/linkedin.png";
import query from "../../../assets/images/query.png";
// import logo from "../../../assets/images/queries.png";

const Footer = () => {
  return (
    <div
      className=" text-white bg-black"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <footer className="footer  pt-7 mb-2 md:flex items-start justify-around">
        <nav className="">
          <img src={query} className="w-24" alt="" />
          <h2 className="text-4xl font-extrabold font ">QueryHive</h2>
          {/* <p className="text-sm font-semibold">ACME Industries Ltd.</p> */}
        </nav>
        <nav>
          <h6 className="footer-title ">Company</h6>
          <Link to="/ab" className=" link-hover">About us</Link>

          <Link to="/queries" className=" link-hover">
            Queries
          </Link>
          <Link to="/blog" className="link-hover ">
            Our Blogs
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Authorization</h6>
          <Link to='/login' className=" link-hover">Sign in</Link>
          <Link to='/register' className=" link-hover">Sign Up</Link>
          
        </nav>
        <nav className=" ">
          <h2 className="mb-4 text-xl font-semibold">Follow Us</h2>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.facebook.com/">
              <img className="w-10 h-10" src={fb} alt="" />
            </Link>
            <Link to="https://www.instagram.com/">
              <img className="w-10 h-10" src={insta} alt="" />
            </Link>
            <Link to="https://www.linkedin.com/">
              <img
                className="w-10 h-10"
                src={linkedIn}
                alt="https://x.com/?lang=en"
              />
            </Link>
          </div>
        </nav>
      </footer>

      <div className="footer footer-center  p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            QueryHive Industries Ltd
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
