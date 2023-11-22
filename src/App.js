import './App.css';
import Navbar from './pages/shared/Navbar';
import {Routes, Route, Link} from "react-router-dom";
import Home from './pages/homepage/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Footer from './pages/homepage/Footer';
import Appointment from './pages/Appointment/Appointment';


function App() {
  return (
    <div className="App px-14">
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='appointment' element={<Appointment></Appointment>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
     </Routes>

     
    </div>
  );
}


export default App;
