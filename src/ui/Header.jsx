import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest font-semibold" to="/">
        Fast Pizza
      </Link>
      {username && (
        <div className=" text-sm font-semibold md:block">{username}</div>
      )}
    </header>
  );
};

export default Header;
