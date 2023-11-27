import './App.css';
import Navbar from './pages/shared/Navbar';
import {Routes, Route, Link} from "react-router-dom";
import Home from './pages/homepage/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Footer from './pages/homepage/Footer';
import Appointment from './pages/Appointment/Appointment';
import SignUp from './pages/signup/SignUp';
import RequireAuth from './pages/Login/RequireAuth';


function App() {
  return (
    <div className="App px-14">
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='signup' element={<SignUp></SignUp>}></Route>
     </Routes>

     
    </div>
  );
}


export default App;
