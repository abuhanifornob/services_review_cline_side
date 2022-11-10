import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from "../../Asserts/login.png"
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const provider =new GoogleAuthProvider()
const Login = () => {
    const { login ,googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);
                form.reset();

                // get jwt token
                //  fetch('http://localhost:5000/jwt', {
                //      method: 'POST',
                //      headers: {
                //          'content-type': 'application/json'
                //      },
                //      body: JSON.stringify(currentUser)
                //  })
                //  .then(res => res.json())
                //  .then(data => {
                //      console.log(data);
                //      // local storage is the easiest but not the best place to store jwt token
                //      localStorage.setItem('genius-token', data.token);
                //      navigate(from, { replace: true });
                //  });

            })
        .catch(error => console.log(error));  
}
const handleGoogleLogIn=()=>{
    googleLogin(provider)
    .then(result=>{
        const user=result.user;
        console.log(user);
    })
    .catch(error=>console.error(error))
}
return (
    <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                    
                </form>
                <h3 className='text-3xl my-3 text-bold'>Login With....!!!</h3>
                    <button className='btn btn-primary mx-10' onClick={handleGoogleLogIn}>Google</button>
                <p className='text-center mt-6'>New to WEOnline Trainer <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
            </div>
        </div>
    </div>
);
};

export default Login;