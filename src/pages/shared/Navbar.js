import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  


return (
    <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="appointment">Appointment</Link></li>
        <li><Link to="review">Reviews</Link></li>
        <li><Link to="contact">Contact US</Link></li>
        <li><Link to="about">About</Link></li>
        <li>{user ? <button onClick={logout}>Sign out</button> : <Link to="login">Login</Link>}</li>
        
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">Doctors Portal</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link></li>
        <li><Link to="appointment">Appointment</Link></li>
        <li><Link to="review">Reviews</Link></li>
        <li><Link to="contact">Contact US</Link></li>
        <li><Link to="about">About</Link></li>
        <li>{user ? <button className='uppercase' onClick={logout}>Sign out</button> : <Link to="login">Login</Link>}</li>
    </ul>
  </div>
</div>
);
};

export default Navbar;