import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo1.png';

const NavBar = () => {
    const handleLogout = () => {
        // Remove the token from sessionStorage
        sessionStorage.removeItem('authToken');
        
        // Redirect to login page
        window.location.href = '/login'; // Example redirect to login page
    };
    return (
        <nav className='navbar navbar-expand-lg'>
            <Link to='/' className='navbar-brand' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt='Logo' style={{ height: '60px', marginRight: '10px', marginLeft: '10px' }} />
                Divine Melodies
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                    <span className='nav-item nav-link'>
                        <Link to='/'>Main</Link>
                    </span>
                    <span className='nav-item nav-link'>
                        <Link to='/create'>Create</Link>
                    </span>
                </div>
            </div>
            {/* Login Link on the far right */}
            <div className='navbar-nav ml-auto'>
                <span className='nav-item nav-link'>
                    <Link to='/register' className='mx-2'>Register</Link>
                    <Link to='/login' className='mx-2'>Login</Link>
                    <button onClick={handleLogout}>Logout</button> {/* Logout button */}
                </span>
            </div>
        </nav>
    );
};

export default NavBar;
