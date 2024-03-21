import {Link}from 'react-router-dom';
import {useContext} from 'react';
import { AuthContext } from './../../Provider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {
  const {googleLogIn,logIn}=useContext(AuthContext);
  const handelGoogleLogIn=(media)=>{
             media()
             .then(res=>console.log(res))
  }
  const handleLogIn=(e)=>{
     e.preventDefault()
     const form=e.target;
     const email=form.email.value;
     const password=form.password.value;
     logIn(email,password)
     .then(res=>{
     toast.success("Login successful");
            console.log(res.user);
     })
     .catch(error=>{
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        
        toast.error("Invalid email/user");
    } else {
      toast.error("Invalid email/user");// Log other errors for debugging purposes
    }
     })
  }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card shrink-0  shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body ">
            <h1 className="text-5xl font-bold">Login now! </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <h1 className='text-red-500'>New here? <Link to='/register'>Register</Link></h1>
              
                 <hr />
                     <h2 className='text-center font-bold'>Or</h2>
                     <h3 className='text-center mb-2 font-medium'>Login with</h3>
                     <h1 onClick={()=>handelGoogleLogIn(googleLogIn)} className='btn btn-primary btn-outline'>Google</h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;