import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import back from "../assets/bb.jpg";
import { FcGoogle } from "react-icons/fc";

import './Login.css';

const Login = () => {
  


  return (
    <div>
      <div className="login mainer">
         <img src={back} alt="image" className="login__bg"/>

         <form action="" className="login__form">
         <h1 className="login__title">LOGIN</h1>

            <div className="login__inputs">
            <div className="login__box">
                  <p className="login__input">Login with Google</p>
                  <FcGoogle style={{fontSize:'40px'}}/>
                  <i className="ri-lock-2-fill"></i>
               </div>
            </div>

            <div className="login__register" style={{fontSize:'15px'}}>
               Welcome! <b>You are a click away </b> to view what's new today
            </div>
         </form>
         </div>
         </div>
  );
};

export default Login;
