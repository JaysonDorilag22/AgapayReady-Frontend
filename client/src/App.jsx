import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/auth/login";
import Sample from "./pages/cruds/Sample";
function App() {

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/table" element={<Sample />} />



    </Routes>
    
    </Router>
  )
}

export default App
