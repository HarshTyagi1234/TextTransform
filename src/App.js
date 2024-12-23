import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";

function App() {
  const [mode, setMode] = useState("light"); // Initial state is light mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"; // Dark background
      document.body.style.color = "white"; // Change all text to white in dark mode
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextTransform - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"; // Light background
      document.body.style.color = "black"; // Black text for light mode
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextTransform - Light Mode";
    }
  };

  return (
    <>
      <Navbar
        title="My-App"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About"
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
