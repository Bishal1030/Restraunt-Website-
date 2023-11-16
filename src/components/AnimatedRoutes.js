import { Route, Routes,useLocation } from "react-router-dom";
import Menu from "../Menu"
import Home from '../components/Home';
import About from '../About';
import Contact from '../Contact';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {

    const location = useLocation();

  return (
    <div>
        <AnimatePresence>
      <Routes location = {location} key= {location.pathname}>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes
