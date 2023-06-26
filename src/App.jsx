
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './comonent/Home/Home'
import Navbar from './comonent/Navbar/Navbar'

function App() {


  return (
    
      <div>
        <Navbar></Navbar>
          <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
      </Routes>
      </div>
      
  )
}

export default App
