"use client";
import React, { useState } from "react";
import Image from "next/image";

import user_icon from '../components/icons/person.png';
import email_icon from '../components/icons/email.png';
import password_icon from '../components/icons/password.png';

const Profil = () => {
    const [action, setAction] = useState("Sign Up");

    const handleSignUp = () => {
        setAction("Sign Up");
    };

    const handleLogIn = () => {
        setAction("Log In");
    };

    return (
        <div className='containerLogin'>
          <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
          </div>
          <div className='inputs'>
            {action === "Log In" ? (
              <div></div>
            ) : (
              <div className='input'>
                <Image src={user_icon} alt="" />
                <input type="text" placeholder="Name" />
              </div>
            )}
            <div className='input'>
              <Image src={email_icon} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className='input'>
              <Image src={password_icon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              Forgot password? <span>Click here!</span>
            </div>
          )}
          <div className='submit-container'>
            <div
              className={action === "Log In" ? "submit gray" : "submit"}
              onClick={handleSignUp}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={handleLogIn}
            >
              Log In
            </div>
          </div>
        </div>
      );
};

export default Profil;