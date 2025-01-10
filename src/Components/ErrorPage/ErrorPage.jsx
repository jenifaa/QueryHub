import { Link } from "react-router-dom";
import errorImg from "../../assets/images/Oops! 404 Error with a broken robot-rafiki.png";
const ErrorPage = () => {
  return (
    <div>
      <img className="md:w-8/12   px-5 md:h-[700px] mt-5 relative sm:object-cover mx-auto " src={errorImg} alt="" />
      <div className="absolute  sm:right-80 sm:top-10">
        <button className="px-10 py-2 font-bold text-xl bg-[purple] text-white">
          <Link to="/">Go Back</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
