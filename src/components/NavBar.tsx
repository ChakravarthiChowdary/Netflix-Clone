import React, { useEffect, useState } from "react";

import "./NavBar.css";

const NavBar = () => {
  const [showBlackbg, setShowBlackbg] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) setShowBlackbg(true);
      else setShowBlackbg(false);
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className={`nav ${showBlackbg && "nav_black"}`}>
      <img src="./NetflixLogo.png" alt="Netflix Logo" className="nav_logo" />
      <img src="./AvatarLogo.png" alt="Avatar Logo" className="nav_avatar" />
    </div>
  );
};

export default NavBar;
