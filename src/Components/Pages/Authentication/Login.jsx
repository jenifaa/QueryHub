import { useContext, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import google from "../../../assets/images/search.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Lottie from "lottie-react";
import loginAnime from "../../../assets/lottie/login.json";
import { Helmet } from "react-helmet-async";
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
    <div className="bg-base-200 min-h-screen">
      <Helmet>
        <title>QueryHive | SignIn</title>
      </Helmet>

      <div className=" px-8 lg:w-10/12 mx-auto   md:px-32 py-10 pt-28">
        <div className="lg:flex justify-between gap-10 items-center">
          <div className="lg:w-5/12 sm:w-8/12 mx-auto">
            <div className="text-center">
              <h1 className="font-bold text-5xl mb-10">SignIn Here</h1>
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
                    className="absolute right-[160px] top-[340px] md:right-[280px] md:top-[334px]  lg:top-[335px] lg:left-[680px]"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
                  </button>
                  {error.login && (
                    <label className="label">{error.login}</label>
                  )}
                </label>
              </div>

              <input
                type="submit"
                value="Sign in"
                className="w-full py-3 text-center font-bold button bg-red-900  border-2 border-[#331A15] text-[#ffffff] rounded-lg"
              />
              <p>
                New to this website? please <Link className="font-bold" to="/register">SignUp</Link>
              </p>
            </form>
            <div className="my-4   rounded-full lg:w-[50%] w-full">
              <button
                onClick={handleGoogleSignIn}
                className=" font-semibold flex justify-around items-center border-2 p-3  rounded-full "
              >
                <img src={google} alt="" className="w-8 mr-3" />
                <p>SignIn with Google</p>
              </button>
            </div>
          </div>

          <div className="">
            <Lottie className="" animationData={loginAnime}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
