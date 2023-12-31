import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form"
import Loading from '../shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


let signInError;
const navigate = useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname || "/";

    if(loading || gLoading){
    return <Loading></Loading>
};

if(error || gError){
    signInError = <small className='text-red-500'>{error?.message || gError?.message}</small>
}


if(user || gUser){
    console.log(gUser);
    navigate(from, { replace: true} );
};

const onSubmit = (data) => {
    console.log(data)
    signInWithEmailAndPassword(data.email, data.password)
}


return (
<div className='flex h-screen justify-center items-center'>
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl font-bold">Login</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    {signInError}
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
    </form>
    <p>New to Doctors Portal <Link className='text-secondary' to="/signup">|| Create new Account</Link></p>
    <div class="divider">OR</div>
    <button 
    onClick={()=>signInWithGoogle()}
    class="btn btn-outline">Continue with Google</button>
     </div>
   </div>
</div>
);
};

export default Login;