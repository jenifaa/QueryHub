import { Link } from "react-router-dom";
import errorImg from "../../assets/images/error.jpeg";
const ErrorPage = () => {
  return (
    <div>
      <div className=" flex justify-center items-center ">
        <button className="btn bg-[purple] text-white mt-10">
          <Link to="/">Go Back</Link>
        </button>
      </div>
      <img className="w-[800px] mx-auto my-10" src={errorImg} alt="" />
    </div>
  );
};

export default ErrorPage;
