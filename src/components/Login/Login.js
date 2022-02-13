import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css';
import { FcGoogle, CgFacebook } from "react-icons/fc";

const Login = () => {
     const {
       register,
       handleSubmit,
       watch,
       formState: { errors },
     } = useForm();

     const loginForm = (logInfo) => {
         console.log(logInfo);
     }

    return (
      <div id="login">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="login-form">
                <button className="googleLog firebase-log-btn">
                  <span><FcGoogle/></span> Sign up with google
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