import Lottie from "lottie-react";
import React, { useContext } from "react";
import signinlottie from "../../assets/signin.json";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext); 
  const location= useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    
    //  sign in user
    signInUser(email, password)
      .then((result) => {
        console.log("User Logged In:", result.user);
        navigate(from);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Lottie */}
        <div className="text-center lg:text-left">
          <Lottie
            animationData={signinlottie}
            loop={true}
            style={{ width: "200px" }}
          />
        </div>

        {/* Form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Sign In</h1>

            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button type="submit" className="btn btn-neutral mt-4">
                  Sign In
                </button>
              </fieldset>
            </form>
            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
