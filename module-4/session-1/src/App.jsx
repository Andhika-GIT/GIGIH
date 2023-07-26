import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// components
import Button from "./components/Button";
import HandsOn from "./components/HandsOn";
import Spotify from "./components/Spotify";

function App() {
  const profile = {
    name: "andhika",
    image: "https://picsum.photos/300?grayscale",
  };
  const word = "generasi gigih";

  const mainContent = (
    <>
      {" "}
      <h1 style={{ color: "lightcoral" }}>{profile.name}</h1>
      <img src={profile.image} alt="" className="avatar" />
      <br />
      <p>hello, {word}</p>
      <br />
    </>
  );

  return (
    <>
      <Spotify />
    </>
  );
}

export default App;
