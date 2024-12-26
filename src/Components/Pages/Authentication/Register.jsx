import { useContext, useEffect, useState } from "react";
import google from '../../../assets/images/search.png'

import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";

import { Helmet } from "react-helmet";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { creatNewUser, setUser, setLoading, userUpdate, signInWithGoogle } =
    useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [register, setRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
        toast.success("Login successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = { email, name };

    setError("");
    setRegister(false);

    if (password.length < 6) {
      setError("Password Should be At-least 6 character long");
      toast.error("Invalid password Information");
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        <>
          Password should contains : <br /> (1) At-least one uppercase,
          <br /> (2) one lowercase,
        </>
      );

      toast.error("Invalid password Information");
      return;
    }

    creatNewUser(email, password)
      .then((result) => {
        const user = result.user;
        // const user = {email: email}

        toast.success("Registered Successfully");
        userUpdate({ displayName: name, photoURL: photo }).then((res) => {
          setUser((prev) => {
            return { ...prev, displayName: name, photoURL: photo };
          });
        });

        setRegister(true);
        navigate(location?.state ? location.state : "/");
        
      })

      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid Information.Please try again...");
        setRegister(false);
        setLoading(false);
      });
  };
  return (
    <div>
      <Helmet>
        <title>QueryHive | SignUp</title>
      </Helmet>

      <div className="w-10/12 px-8  mx-auto bg-base-200  md:px-32 py-10 mt-56 lg:mt-44 mb-10">
        <div className="text-center my-5">
          <h1 className="font-bold text-3xl mb-10">SignUp Here</h1>
        </div>

        <form onSubmit={handleSignUp}>
          <div className=" my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder=" Enter Email"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="md:flex justify-between gap-6 items-center my-5">
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
                className="absolute right-[250px] top-[600px]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
              </button>
            </label>
          </div>

          <div className="md:flex justify-between gap-6 items-center my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Photo</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo url"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <input
            type="submit"
            value="SignUp"
            className="w-full py-3 text-center font-bold button bg-[#5c4E4E]  border-2 border-[#331A15] text-[#ffffff] rounded-lg"
          />
           <p>
              Already have an account? please <Link to="/login">Login</Link>
            </p>
        </form>
        {error && <p className="text-red-600 px-4 pb-4">{error}</p>}

        <div className="my-4 ml-3  rounded-full lg:w-[38%] w-full">
          <button
            onClick={handleGoogleSignUp}
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

export default Register;
