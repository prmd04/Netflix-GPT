import React, { useState } from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../Util/firebase";
import { useNavigate } from "react-router-dom";


const Browse = () => {
  const [showSignOut, setShowSignOut] = useState(false);
  const navigate = useNavigate();

  const handleSpanClick = () => {
    setShowSignOut(true);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between">
      <Header />
      <div className="flex pr-14">
        <img
          className="w-12 pt-5"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
        <span className="ml-2 mt-7 cursor-pointer " onClick={handleSpanClick}>
          &#9660;
          <div>
            {showSignOut && <button onClick={handleSignOut}>Sign Out</button>}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Browse;
