
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './comonent/Home/Home'
import Navbar from './comonent/Navbar/Navbar'
import Footer from './comonent/Home/Footer'

function App() {


  return (
    
      <div>
        <Navbar></Navbar>
          <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
      </Routes>
      <Footer></Footer>
      </div>
      
  )
}

export default App
