import React from "react";
import { Link } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <h1>React Router</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">
          <button>go to home</button>
        </Link>
        <Link to="/about">
          <button>go to about</button>
        </Link>
        <Link to="/profile">
          <button>go to profile</button>
        </Link>
      </div>
    </>
  );
};

export default DefaultLayout;
