import Image from 'next/image';
import myImage from 'public/myImage.png';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
import React, { useState } from 'react';
import userIcon from 'public/tdesign-user-7aG.png';
import passwordIcon from 'public/solar-lock-password-linear-RUC.png';
import successIcon from 'public/ep-success-filled-U24.png';
import adminSiteImg from 'public/simple-icons-phpmyadmin.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [validationStatus, setValidationStatus] = useState(null);
  const [isPasswordValid, setisPasswordValid] = useState(null);

  const validateUser = () => {
    const isValid = userName.length > 1 ? true : false;
    setValidationStatus(isValid);
  };

  const validatePassword = () => {
    if (validationStatus && password.length > 1) {
      setisPasswordValid(true);
    }
    if (validationStatus && password.length < 1) {
      setisPasswordValid(null);
    }
    if (!validationStatus && password.length < 1) {
      setisPasswordValid(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validationStatus && password.length < 1) {
      setisPasswordValid(false);
    }
    if (validationStatus && password.length > 1) {
      console.log('LoggedIn Successfully!');
      console.log('User Name Entered:', userName);
      console.log('Password Entered:', password);
      setUserName('');
      setPassword('');
      setisPasswordValid(null);
      setValidationStatus(null);
    }
  };

  return (
    <Layout>
      <div className="flex flex-row">
        <div className="welcome-back w-1/2">
          <div className="flex flex-col mt-9">
            <div className="flex flex-row justify-center items-end">
              <Image
                className="h-8 w-10 mb-2 mr-1 justify-self-end items-end rounded-lg"
                src={adminSiteImg}
                alt="Admin Site"
              />
              <h1 className="my-24" style={{ fontFamily: "Montserrat", fontWeight: "normal" }}>
                AdminSite
              </h1>
            </div>
            <h2 className="pt-16" style={{ fontFamily: "Montserrat" }}>
              Welcome Back
            </h2>
            <p className="pb-4" style={{ color: '#A8C4B8', fontFamily: "Montserrat" }}>
              Welcome Back, Please enter your details
            </p>
            <div className="flex h-12 justify-center">
              <div className="flex w-3/6 bg-green-50 h-10 rounded-lg">
                <div className="w-1/2 flex justify-center items-center">
                  <div className="flex w-36 h-5/6 justify-center items-center bg-white rounded-lg text-black-100">
                    <a href="#">Sign In</a>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center items-center ml-3 sso-text-green">
                  <a href="#">Signup</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <form onSubmit={handleSubmit}>
                <div className="relative mb-2">
                  <div className="absolute flex h-full justify-center items-center ml-4">
                    <Image
                      src={userIcon}
                      alt="Search Icon"
                      className="h-4 w-4 text-gray-400"
                    />
                    <div className="border-l-2 ml-4 h-6" style={{ color: "#A8C4B8" }}></div>
                  </div>
                  <input
                    type="Username"
                    placeholder="User Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    onBlur={validateUser}
                    className={`border-2 rounded-lg text-xl w-64 focus:outline-none focus:ring-2 focus:ring-green-400 ${validationStatus === null ? '' : validationStatus ? 'sso-input-green' : 'border-red-500'}`}
                    style={{ paddingLeft: 64 }}
                  />
                  {validationStatus ? 
                    <Image
                      src={successIcon}
                      alt="Search Icon"
                      className="absolute right-2 top-3 h-6 w-6"
                    /> : ""
                  }
                </div>

                <div className="relative">
                  <div className="absolute flex h-full justify-center items-center ml-4">
                    <Image
                      src={passwordIcon}
                      alt="Search Icon"
                      className="h-4 w-4"
                    />
                    <div className="border-l-2 ml-4 h-6" style={{ color: '#a8c4b8' }}></div>
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onBlur={validatePassword}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`border-2 style={{ color: '#a8c4b8' }} rounded-lg text-xl w-64 focus:outline-none focus:ring-2 focus:ring-green-400 ${isPasswordValid === null ? '' : isPasswordValid ? 'sso-input-green' : 'border-red-500'}`}
                    style={{ paddingLeft: 64 }}
                  />
                  {isPasswordValid === null ? "" : isPasswordValid ? 
                    <Image
                      src={successIcon}
                      alt="Search Icon"
                      className="absolute right-2 top-3 h-6 w-6"
                    /> : "" 
                  }
                </div>
                <button style={{ background: "#32D3EC" }} className="w-full focus:outline-none" type="submit">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center" style={{ padding: '0.5rem' }}>
          <Image className="object-cover w-full h-full rounded-lg" src={myImage} alt="Image Description" />
        </div>
      </div>
    </Layout>
  );
}