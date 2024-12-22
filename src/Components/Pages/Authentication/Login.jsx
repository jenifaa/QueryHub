import { useContext, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import google from '../../../assets/images/search.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const { userLogin, setUser, setUserLogin, signInWithGoogle } = useAuth();
  const [login, setLogin] = useState(false);
  const [error, setError] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();

  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
        toast.success("Login successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;

        setUser(user);

        navigate(location?.state ? location.state : "/");
        toast.success("Login SuccessFully");

        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        const createdAt = result?.user?.metadata?.creationTime;
      })
      .catch((error) => {
        console.log(error);
        setError({ login: error.code });
        toast.error("Invalid Email or Password");
      });
  };
  return (
    <div>
      <div className="w-10/12 px-8  mx-auto bg-base-200  md:px-32 py-10 mt-56 lg:mt-44 mb-10">
        <div className="text-center my-5">
          <h1 className="font-bold text-3xl mb-10">SignIn Here</h1>
        </div>

        <form onSubmit={handleSignin}>
          <div className=" my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="input input-bordered w-full "
              />
            </label>
            

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered "
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[220px] top-[500px] lg:top-[450px] lg:right-[300px]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
              </button>
              {error.login && <label className="label">{error.login}</label>}
            </label>
          </div>

          
          <input
            type="submit"
            value="Sign in"
            className="w-full py-3 text-center font-bold button bg-[#5c4E4E]  border-2 border-[#331A15] text-[#ffffff] rounded-lg"
          />
           <p>
              New to this website? please <Link to="/register">Register</Link>
            </p>
        </form>
        <div className="my-4 ml-3  rounded-full lg:w-[38%] w-full">
          <button
            onClick={handleGoogleSignIn}
            className=" font-semibold flex justify-around items-center border-2 p-3 rounded-full "
          >
            <img src={google} alt="" className="w-8 mr-3" />
            <p>Sign Up with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
