import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AnimatedRoutes from "./components/AnimatedRoutes";
import './App.css';


function App() {

  return (
    <div className="App">
        <Router>
        <Navbar />
        <AnimatedRoutes/>
        <Footer />
      </Router>

       
     </div>
  );
}

export default App;
