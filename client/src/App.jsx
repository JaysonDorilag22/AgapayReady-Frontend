import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/auth/login";
function App() {

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Login />} />


    </Routes>
    
    </Router>
  )
}

export default App
