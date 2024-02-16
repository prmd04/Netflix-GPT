import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../Util/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Util/userSlice";
import { useDispatch } from "react-redux";
import { NetFlix_avatar, NetFlix_logo } from "../Util/constant";

const Header = () => {
  const dispatch = useDispatch();
  const [showSignOut, setShowSignOut] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleSpanClick = () => {
    setShowSignOut(!showSignOut);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsuscribe when component unmounted
    return () => unsuscribe();
  }, []);
  return (
    <div className="absolute w-screen px-12 py-2  z-10 flex justify-between ">
      <img
        className="w-44"
        src={NetFlix_logo}
      ></img>
      {user && (
        <span className="flex p-2">
          <img
            className="w-12 object-contain"
            src={NetFlix_avatar}
            alt="Netflix Avatar"
          />
          <span className="ml-2 mt-4 cursor-pointer text-white " onClick={handleSpanClick}>
            &#9660;
            <div>
              {showSignOut && <button onClick={handleSignOut}>Sign Out</button>}
            </div>
          </span>
        </span>
      )}
    </div>
  );
};

export default Header;
