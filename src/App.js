import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Home from "./components/Home"
// import About from "./coponents/About"
import Forms from "./components/Form"
import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Contact/>} />
          <Route path="/2" element={<Forms />} />
        </Routes>
      </div>
    </>
  )
}

export default App