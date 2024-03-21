import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { AuthContext } from './../../Provider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';

const Register = () => {
  const {createUser,googleLogIn}=useContext(AuthContext);
  const handelGoogleLogIn=(media)=>{
    media()
    .then(res=>console.log(res))
}
const handleInput=(e)=>{
     e.preventDefault()
     const form=e.target;
     const name=form.name.value;
     const email=form.email.value;
     const password=form.password.value;
     if(password.length<6){
      toast.error("password must be at least 6 characters")
     
     }
     else{
      toast.success("Sign up Successful ")
     }
     createUser(email,password)
     .then(res=>console.log(res.user))
     .catch(error=>console.log(error))

}


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleInput} className="card-body">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
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
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <h1 className='text-red-500'>Already have account? <Link to='/login'>Login</Link></h1>
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

export default Register;