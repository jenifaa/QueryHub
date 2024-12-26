import { Link } from "react-router-dom";
import fb from "../../../assets/images/facebook.png";
import insta from "../../../assets/images/instagram.png";
import linkedIn from "../../../assets/images/linkedin.png";
import query from '../../../assets/images/query.png'
// import logo from "../../../assets/images/queries.png";

const Footer = () => {
  return (
    <div
      className=" text-white bg-black"
      style={{
       
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <footer className="footer  p-10 md:flex items-center justify-around">
        <nav className="">
          <img src={query} className="w-28" alt="" />
          <h2 className="text-5xl font-extrabold font ">QueryHive</h2>
          <p className="text-sm font-semibold">ACME Industries Ltd.</p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="md:place-self-center ">
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

      
        <footer className="footer footer-center  p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </footer>
      
    </div>
  );
};

export default Footer;
