import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    // console.log('user Logout');
    localStorage.clear();
    navigate('/signup');
  };
  return (
    <div>
      <ul className='nav-ul'>
        <li>
          <Link to='/'>Product</Link>
        </li>
        <li>
          <Link to='/add'>Add Product</Link>
        </li>
        <li>
          <Link to='/update'>Update Product</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        {/* <li>
          {auth ? (
            <Link to='/signup' onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to='/signup'>SignUp</Link>
          )}
        </li>
        <li>
          <Link to ='/login'>Login</Link>
        </li> */}
        {auth ? (
          <li>
            <Link to='/signup' onClick={logout}>
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to='/sigup'>SignUp</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;