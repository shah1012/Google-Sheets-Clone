import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Editor, Home, Login, Signup } from "./routes";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("User") !== null || undefined) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/editor/:docid" element={<Editor />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
