import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Asserts/logo.jpg"
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/serviceall'>Services</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>

        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/review'>My Reivews</Link></li>
                    <li className='font-semibold'><Link to=''>Add Service</Link></li>
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }

    </>

    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" className='w-12 rounded-full mr-2' />
                    <h3>WEOnline Trainer</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="w-24 rounded-full">
                    {
                        user?.uid?<img src={user.photoURL} className="w-24 rounded-full mr-10" />:""

                    }
                    
                </div>
            </div>
        </div>
    );

};

export default Header;