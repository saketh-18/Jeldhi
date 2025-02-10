import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/Login';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
