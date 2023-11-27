import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form"
import Loading from '../shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);

const [updateProfile, updating, updateError] = useUpdateProfile(auth);
const navigate = useNavigate();


let signInError;

    if(loading || gLoading ||updating){
    return <Loading></Loading>
};

if(error || gError || updateError){
    signInError = <small className='text-red-500'>{error?.message || gError?.message || updateError?.message}</small>
}


if(user || gUser){
    console.log(gUser);
};

const onSubmit = async data => {
    console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name})
    console.log('update done')
    navigate('/appointment')
}


return (
<div className='flex h-screen justify-center items-center'>
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl font-bold">Sign Up</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
    
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
                    <input className='btn btn-accent w-full uppercase' value="Sign Up" type="submit" />
    </form>
    <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>    <div class="divider">OR</div>
    <button 
    onClick={()=>signInWithGoogle()}
    class="btn btn-outline">Continue with Google</button>
     </div>
   </div>
</div>
);
};

export default SignUp;