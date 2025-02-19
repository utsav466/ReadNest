import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import ForgotPassword from "./components/ForgotPassword"
import "./App.css"
import LandingPage from "./components/LandingPage"
import "./Page.css"


function App() {
  return (
    <Router>
    
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-Password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App

