import React, { useState, useRef } from "react";
import Header from "./Header";
import { chakeValidData } from "../Util/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Util/firebase";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  // const name =useRef();

  const signInHandler = (e) => {
    e.preventDefault();
    const message = chakeValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const clickHandler = (event) => {
    event.preventDefault();
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg"
          alt="not found"
        />
      </div>
      <form className="w-4/12 bg-black absolute my-36 mx-auto left-0 right-0 opacity-90 ">
        <h1 className="p-2 mx-12 my-6 text-white text-2xl font-bold">
          {signIn ? "Sign in" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            // ref={name}
            className="p-2 mx-12 m-2 w-[80%] rounded-lg h-12 bg-gray-600"
            type="text"
            placeholder="Name"
          />
        )}
        {/* {errorMessage && errorMessage.includes("Name") && <p className="text-red-600 font-bold py-3 text-lg mx-12">{errorMessage}</p>} */}
        <input
          ref={email}
          className="p-2 mx-12 m-4 w-[80%] rounded-lg h-12 bg-gray-600"
          type="text"
          placeholder="Email or phone number"
        />
        {errorMessage && errorMessage.includes("Email") && (
          <p className="text-red-600 font-bold py-3 text-lg mx-12">
            {errorMessage}
          </p>
        )}
        <input
          ref={password}
          className="p-2 mx-12 m-2 w-[80%] rounded-lg h-12 bg-gray-600"
          type="password"
          placeholder="Password"
        />
        {errorMessage && errorMessage.includes("Password") && (
          <p className="text-red-600 font-bold py-3 text-lg mx-12">
            {errorMessage}
          </p>
        )}
        <button
          className="p-2 mx-12 m-3 bg-red-700 text-white w-[80%] rounded-lg"
          onClick={signInHandler}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-3 text-center mr-5 text-white">Forgot password?</p>
        <p className="mx-12 mb-20 text-white">
          {signIn ? "New to NetFlix?" : "Alredy Customer?"}
          <button
            className="font-bold text-white cursor-pointer"
            onClick={clickHandler}
          >
            {signIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
