import React, { useContext } from "react";
import { UserContext } from "../../App";
import { useForm } from "react-hook-form";
import "./Login.css";
import { FcGoogle, CgFacebook } from "react-icons/fc";
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "./config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const app = initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const loginForm = (logInfo) => {
    console.log(logInfo);
  };
 const navigate = useNavigate();
 let location = useLocation();
 let { from } = location.state || { from: { pathname: "/" } };
  const auth = getAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setLoggedInUser(user);
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div id="login">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="login-form">
              <button
                onClick={signInWithGoogle}
                className="googleLog firebase-log-btn"
              >
                <span>
                  <FcGoogle />
                </span>{" "}
                Sign up with google
              </button>
              <h2>Please Login</h2>
              <form onSubmit={handleSubmit(loginForm)}>
                <input
                  type="email"
                  placeholder="Your email"
                  {...register("email", { required: true })}
                  className=""
                />
                {errors.email && <span>This field is required</span>}

                <input
                  type="password"
                  placeholder="Your password"
                  {...register("password", { required: true })}
                  className=""
                />
                {errors.password && <span>This field is required</span>}

                <div className="booking-form-btn">
                  <button type="submit" className="primary-btn">
                    LogIn
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-7">
            <div className="login-img">
              <img src="./images/login.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
