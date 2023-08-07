import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const getSongs = async () => {
    const response = await fetch("http://localhost:3000/playlists");
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
